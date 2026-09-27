import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { GeoJSON, MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layers, LocateFixed, LoaderCircle, Search } from 'lucide-react';
import { BuildingEntry, CAMPUS_GEOJSON, SEARCH_BUILDINGS_LIST } from '../data/campusGeoJSON';
import { BuildingDetailPanel } from '../components/BuildingDetailPanel';
import { MapController } from '../components/MapController';
import { UserLocation, UserLocationLayer } from '../components/UserLocationLayer';
import { useTheme } from '../context/ThemeContext';
import L from 'leaflet';

const CENTER: [number, number] = [16.9376, 121.7644];
const LANDMARK_LABELS: Record<number, string> = {
  4: 'Administration',
  5: 'Library',
  6: 'Arts & Sciences / Law',
  9: 'CCSICT',
  15: 'Agriculture',
  18: 'CBM',
  19: 'College of Education',
  20: 'Canteen',
  21: 'Gymnasium'
};
const MAP_LABEL_EXCLUSIONS = new Set([8, 10, 11, 12, 13, 14, 22, 26, 30]);
const SHORT_LABELS: Record<number, string> = {
  24: 'CCJE - Block 1',
  25: 'CCJE - Block 2',
  27: 'CCJE - Block 3',
  28: 'CCJE - Block 4',
  17: 'College of Education Annex',
  6: 'Arts & Sciences / Law'
};

const MIN_LANDMARK_ZOOM = 15;
const MIN_SECONDARY_LABEL_ZOOM = 17;

function getLabelForFeature(feature: any): string | undefined {
  if (
    feature.geometry.type !== 'Polygon' ||
    typeof feature.id !== 'number' ||
    MAP_LABEL_EXCLUSIONS.has(feature.id)
  ) return undefined;
  return LANDMARK_LABELS[feature.id] || SHORT_LABELS[feature.id] || feature.properties?.name;
}

function isLandmark(feature: any): boolean {
  return typeof feature.id === 'number' && feature.id in LANDMARK_LABELS;
}

function shouldShowLabel(feature: any, zoom: number): boolean {
  return isLandmark(feature)
    ? zoom >= MIN_LANDMARK_ZOOM
    : zoom >= MIN_SECONDARY_LABEL_ZOOM;
}

function getLabelBounds(map: L.Map, feature: any, label: string) {
  const center = getFeatureCenter(feature);
  const point = map.latLngToContainerPoint(center);
  const width = Math.min(120, Math.max(44, label.length * 5.8 + 12));
  const lines = Math.min(2, Math.max(1, Math.ceil(label.length / 18)));
  const height = lines * 16 + 6;

  return {
    left: point.x - width / 2,
    right: point.x + width / 2,
    top: point.y - height / 2,
    bottom: point.y + height / 2
  };
}

function boundsOverlap(
  first: ReturnType<typeof getLabelBounds>,
  second: ReturnType<typeof getLabelBounds>
) {
  return first.left < second.right && first.right > second.left &&
    first.top < second.bottom && first.bottom > second.top;
}

function getBuildingStyle(isSelected: boolean, isEmphasized = false) {
  if (isSelected || isEmphasized) {
    return {
      color: '#D4A437',
      fillColor: '#046A38',
      fillOpacity: 0.55,
      weight: 4,
      opacity: 1
    };
  }

  return {
    color: '#0B6E4F',
    fillColor: '#046A38',
    fillOpacity: 0.14,
    weight: 2,
    opacity: 0.7
  };
}

function LabelVisibilityController({
  layersRef
}: {
  layersRef: React.MutableRefObject<Map<number, { feature: any; layer: L.Layer }>>;
}) {
  const map = useMap();

  useEffect(() => {
    const updateLabels = () => {
      const placedBounds: Array<ReturnType<typeof getLabelBounds>> = [];
      const entries = Array.from(layersRef.current.values()).sort(({ feature: first }, { feature: second }) => {
        return Number(isLandmark(second)) - Number(isLandmark(first));
      });

      entries.forEach(({ feature, layer }) => {
        const label = getLabelForFeature(feature);
        const typedLayer = layer as L.Layer & {
          bindTooltip: (content: string, options: L.TooltipOptions) => L.Layer;
          unbindTooltip: () => L.Layer;
        };
        const currentTooltip = layer.getTooltip();
        const currentlyPermanent = currentTooltip?.options.permanent ?? false;

        if (!label) {
          if (currentlyPermanent) {
            typedLayer.unbindTooltip();
            typedLayer.bindTooltip(feature.properties.name, {
              direction: 'top',
              offset: [0, -4],
              className: 'isu-tooltip',
              interactive: false
            });
          }
          return;
        }

        const candidateBounds = getLabelBounds(map, feature, label);
        const permanent = shouldShowLabel(feature, map.getZoom()) &&
          !placedBounds.some((bounds) => boundsOverlap(candidateBounds, bounds));

        if (permanent) placedBounds.push(candidateBounds);
        if (currentlyPermanent === permanent && currentTooltip?.getContent() === label) return;

        typedLayer.unbindTooltip();
        typedLayer.bindTooltip(label, {
          permanent,
          direction: permanent ? 'center' : 'top',
          offset: permanent ? [0, 0] : [0, -4],
          className: permanent ? 'campus-label' : 'isu-tooltip',
          interactive: false,
          opacity: permanent ? 0.95 : 1
        });
      });
    };

    updateLabels();
    map.on('zoomend', updateLabels);
    return () => {
      map.off('zoomend', updateLabels);
    };
  }, [layersRef, map]);

  return null;
}

// Compute centroid of a polygon feature for flyTo
function getFeatureCenter(feature: any): [number, number] {
  if (feature.geometry.type !== 'Polygon') return CENTER;
  const coords = feature.geometry.coordinates[0];
  let lat = 0;
  let lng = 0;
  coords.forEach((c: [number, number]) => {
    lng += c[0];
    lat += c[1];
  });
  return [lat / coords.length, lng / coords.length];
}

function ResizeMap() {
  const map = useMap();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      map.invalidateSize();
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [map]);

  return null;
}

function LocationFlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap();

  useEffect(() => {
    if (!target) return;
    map.flyTo(target, Math.max(map.getZoom(), 18), { duration: 1.2 });
  }, [map, target]);

  return null;
}

export function MapView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const requestedId = Number(searchParams.get('building')) || 18; // CBM default
  const [selectedId, setSelectedId] = useState<number>(requestedId);
  const [panelOpen, setPanelOpen] = useState(true);
  const labelLayersRef = useRef(new Map<number, { feature: any; layer: L.Layer }>());
  const selectedIdRef = useRef(selectedId);
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [locationStatus, setLocationStatus] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationFlyTarget, setLocationFlyTarget] = useState<[number, number] | null>(null);

  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId]);

  useEffect(() => {
    setSelectedId(requestedId);
    setPanelOpen(true);
  }, [requestedId]);

  const selectedFeature = useMemo(
    () => CAMPUS_GEOJSON.features.find((f: any) => f.id === selectedId),
    [selectedId]
  );

  const selectedEntry: BuildingEntry | undefined = useMemo(
    () => SEARCH_BUILDINGS_LIST.find((b) => b.id === selectedId),
    [selectedId]
  );

  const selectedRooms = useMemo(() => selectedEntry?.rooms || [], [selectedEntry]);

  const handleLocationPosition = useCallback((position: UserLocation | null) => {
    setUserLocation(position);
    if (position) setLocating(false);
  }, []);

  const handleLocationStatus = useCallback((status: string | null) => {
    setLocationStatus(status);
    if (status) setLocating(false);
  }, []);

  const locateUser = useCallback(() => {
    if (userLocation) {
      setLocationFlyTarget([...userLocation.center]);
      return;
    }

    if (!navigator.geolocation) {
      setLocationStatus('Location is not supported by this browser.');
      return;
    }

    setLocating(true);
    setLocationStatus(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextCenter: [number, number] = [
          position.coords.latitude,
          position.coords.longitude
        ];
        setUserLocation({ center: nextCenter, accuracy: position.coords.accuracy });
        setLocationFlyTarget(nextCenter);
        setLocating(false);
      },
      (error) => {
        setLocating(false);
        setLocationStatus(
          error.code === error.PERMISSION_DENIED
            ? 'Location access denied — enable it in your browser settings to see your position on the map'
            : 'Unable to determine your location right now.'
        );
      },
      { enableHighAccuracy: true, maximumAge: 0, timeout: 15_000 }
    );
  }, [userLocation]);

  const flyTarget: [number, number] = selectedFeature
    ? getFeatureCenter(selectedFeature)
    : CENTER;

  // Keep references stable to avoid GeoJSON remount/re-render during map movement.
  const geoData = useMemo(() => CAMPUS_GEOJSON, []);

  // GeoJSON style + interactions (stable) 
  const styleFeature = useCallback(
    (feature: any) => {

      const isSelected = feature.id === selectedId;
      const isLine = feature.geometry.type === 'LineString';

      if (isLine) {
        const isMainRoad = feature.id === 35;

        if (isMainRoad) {
          return {
            color: '#ffffff',
            weight: 6,
            opacity: 1,
            dashArray: '3 10',
            lineCap: 'round' as any
          };
        }

        return {
          color: '#32CD32',
          weight: 10,
          opacity: 1,
          lineCap: 'round' as any
        };
      }

      return getBuildingStyle(isSelected);
    },
    [selectedId]
  );

  // Keep interaction handlers stable to avoid Leaflet layer churn during map dragging.
  const onEachFeature = useCallback((feature: any, layer: L.Layer) => {
    if (!feature.properties || !feature.properties.name) return;

    const name = feature.properties.name;
    if (feature.geometry.type === 'Polygon' && typeof feature.id === 'number') {
      labelLayersRef.current.set(feature.id, { feature, layer });
    }

    layer.bindTooltip(name, {
      direction: 'top',
      offset: [0, -4],
      className: 'isu-tooltip',
      interactive: false
    });

    layer.on({
      click: () => {
        if (feature.id) {
          setSelectedId(feature.id);
          setPanelOpen(true);
        }
      },
      mouseover: (event: L.LeafletMouseEvent) => {
        if (feature.geometry.type === 'Polygon' && feature.id !== selectedIdRef.current) {
          (event.target as L.Path).setStyle(getBuildingStyle(false, true));
        }
      },
      mouseout: (event: L.LeafletMouseEvent) => {
        if (feature.geometry.type === 'Polygon' && feature.id !== selectedIdRef.current) {
          (event.target as L.Path).setStyle(getBuildingStyle(false));
        }
      }
    });
  }, [labelLayersRef]);



  const tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

  return (
    <div className="relative w-full h-full min-h-0 flex flex-col bg-gray-100 dark:bg-isu-charcoal">
      {/* Floating Header Actions */}
      <div className="safe-area-top absolute top-0 left-4 right-4 z-[1000] pointer-events-none">
        <div className="flex justify-between items-start">
          <button
            onClick={() => navigate('/search')}
            className="bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md min-w-12 min-h-12 p-3 rounded-lg shadow-lg pointer-events-auto text-isu-green dark:text-isu-mint hover:bg-white dark:hover:bg-isu-charcoal-light active:scale-95 transition-colors border border-white/40 dark:border-isu-mint/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint"
            aria-label="Open search"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
          </button>

          <button
            onClick={locateUser}
            disabled={locating}
            className="bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md min-w-12 min-h-12 p-3 rounded-lg shadow-lg pointer-events-auto text-isu-green dark:text-isu-mint hover:bg-white dark:hover:bg-isu-charcoal-light active:scale-95 transition-colors border border-white/40 dark:border-isu-mint/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint disabled:opacity-70"
            aria-label={locating ? 'Finding your location' : 'Locate me'}
          >
            {locating ? <LoaderCircle className="w-5 h-5 animate-spin" aria-hidden="true" /> : <LocateFixed className="w-5 h-5" aria-hidden="true" />}
          </button>

          {selectedEntry && (
            <div className="bg-white/95 dark:bg-isu-charcoal-light/95 px-3 py-2 rounded-lg shadow-sm pointer-events-auto border-l-2 border-isu-gold dark:border-isu-mint max-w-[200px]">
            <p className="text-[9px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-300">
              Selected
            </p>
            <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{selectedEntry.name}</p>
            </div>
          )}

          <button
            className="bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md min-w-12 min-h-12 p-3 rounded-lg shadow-lg pointer-events-auto text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-isu-charcoal-light active:scale-95 transition-colors border border-white/40 dark:border-isu-mint/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-isu-gold dark:focus-visible:ring-isu-mint"
            aria-label="Layers"
          >
            <Layers className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {locationStatus && (
          <div
            role="status"
            className="mt-2 mx-auto max-w-[290px] rounded-lg bg-white/95 dark:bg-isu-charcoal-light/95 border border-isu-gold/50 dark:border-isu-mint/30 px-3 py-2 text-[11px] leading-tight text-gray-700 dark:text-gray-200 shadow-sm pointer-events-auto"
          >
            {locationStatus}
          </div>
        )}
      </div>

      <div className="flex-1 w-full relative z-0">
        <MapContainer
          center={CENTER}
          zoom={15}
          maxZoom={19}
          zoomSnap={0.5}
          wheelDebounceTime={100}
          preferCanvas={true}
          zoomControl={false}
          className="map-touch-surface w-full h-full"
          // Prevent rerender/redraw side effects while interacting
          trackResize={false}
          // Revert motion smoothing to avoid drag flashes
          inertia={false}

          // Hardware accel hints


          markerZoomAnimation={true}
          transform3DLimit={100}
          style={{ background: isDark ? '#0E1512' : '#e5e7eb' }}
        >
          <TileLayer
            attribution=""
            url={tileUrl}
            maxZoom={19}
            maxNativeZoom={18}
            className="campus-basemap"
          />

          <GeoJSON
            // IMPORTANT: do not remount GeoJSON on every selectedId change or drag.
            data={geoData}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...({ style: styleFeature } as any)}
            onEachFeature={onEachFeature}
          />

          <ResizeMap />
          <LabelVisibilityController layersRef={labelLayersRef} />
          <UserLocationLayer
            onPositionChange={handleLocationPosition}
            onStatusChange={handleLocationStatus}
          />
          <LocationFlyTo target={locationFlyTarget} />
          <MapController target={flyTarget} zoom={18} />
        </MapContainer>
      </div>

      <BuildingDetailPanel
        isOpen={panelOpen && !!selectedEntry}
        onClose={() => setPanelOpen(false)}
        name={selectedEntry?.name || ''}
        category={selectedEntry?.category || ''}
        rooms={selectedRooms}
        imageUrl={selectedFeature?.properties?.imageUrl}
      />
    </div>
  );
}

