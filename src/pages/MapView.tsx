import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Layers } from 'lucide-react';
import {
  CAMPUS_GEOJSON,
  SEARCH_BUILDINGS_LIST,
  BuildingEntry } from
'../data/campusGeoJSON';
import { BuildingDetailPanel } from '../components/BuildingDetailPanel';
import { MapController } from '../components/MapController';
import { useTheme } from '../context/ThemeContext';
import L from 'leaflet';
const CENTER: [number, number] = [16.9376, 121.7644];
// Compute centroid of a polygon feature for flyTo
function getFeatureCenter(feature: any): [number, number] {
  if (feature.geometry.type !== 'Polygon') return CENTER;
  const coords = feature.geometry.coordinates[0];
  let lat = 0,
    lng = 0;
  coords.forEach((c: [number, number]) => {
    lng += c[0];
    lat += c[1];
  });
  return [lat / coords.length, lng / coords.length];
}
export function MapView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const requestedId = Number(searchParams.get('building')) || 18; // CBM default
  const [selectedId, setSelectedId] = useState<number>(requestedId);
  const [panelOpen, setPanelOpen] = useState(true);
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
  const selectedRooms = useMemo(
    () => selectedEntry?.rooms || [],
    [selectedEntry]
  );
  const flyTarget: [number, number] = selectedFeature ?
  getFeatureCenter(selectedFeature) :
  CENTER;
  // GeoJSON style + interactions
  const styleFeature = (feature: any) => {
    const isSelected = feature.id === selectedId;
    const isLine = feature.geometry.type === 'LineString';
    if (isLine) {
      return {
        color: '#32CD32',
        weight: 4,
        opacity: 0.7,
        dashArray: '4 6'
      };
    }
    return {
      color: isSelected ? '#FFD700' : '#32CD32',
      fillColor: '#32CD32',
      fillOpacity: isSelected ? 0.7 : 0.5,
      weight: isSelected ? 4 : 4
    };
  };
  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (!feature.properties || !feature.properties.name) return;
    const name = feature.properties.name;
    const category = feature.properties.category || '';
    layer.bindTooltip(name, {
      direction: 'top',
      offset: [0, -4],
      className: 'isu-tooltip'
    });
    layer.on({
      click: () => {
        if (feature.id) {
          setSelectedId(feature.id);
          setPanelOpen(true);
        }
      }
    });
  };
  const tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  return (
    <div className="relative w-full h-full flex flex-col bg-gray-100 dark:bg-isu-charcoal">
      {/* Floating Header Actions */}
      <div className="absolute top-4 left-4 right-4 z-[1000] flex justify-between items-start pointer-events-none">
        <button
          onClick={() => navigate('/search')}
          className="bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md p-3 rounded-2xl shadow-lg pointer-events-auto text-isu-green dark:text-isu-mint hover:bg-white dark:hover:bg-isu-charcoal-light transition-colors border border-white/40 dark:border-isu-mint/20"
          aria-label="Open search">
          
          <Search className="w-5 h-5" />
        </button>

        {selectedEntry &&
        <div className="bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md px-3 py-2 rounded-2xl shadow-lg pointer-events-auto border border-white/40 dark:border-isu-mint/20 max-w-[200px]">
            <p className="text-[9px] uppercase tracking-wider font-semibold text-isu-gold dark:text-isu-mint">
              Selected
            </p>
            <p className="text-xs font-bold text-gray-900 dark:text-white truncate">
              {selectedEntry.name}
            </p>
          </div>
        }

        <button
          className="bg-white/90 dark:bg-isu-charcoal-light/90 backdrop-blur-md p-3 rounded-2xl shadow-lg pointer-events-auto text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-isu-charcoal-light transition-colors border border-white/40 dark:border-isu-mint/20"
          aria-label="Layers">
          
          <Layers className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 w-full relative z-0">
        <MapContainer
          center={CENTER}
          zoom={15}
          maxZoom={19}
          zoomControl={false}
          className="w-full h-full"
          style={{
            background: isDark ? '#0E1512' : '#e5e7eb'
          }}
          key={isDark ? 'dark' : 'light'}>
          
          <TileLayer
            attribution=''
            url={tileUrl}
            maxZoom={19}
            maxNativeZoom={18} />

          

          <GeoJSON
            key={`geojson-${selectedId}-${isDark}`}
            data={CAMPUS_GEOJSON}
            style={styleFeature as any}
            onEachFeature={onEachFeature} />
          

          <MapController target={flyTarget} zoom={18} />
        </MapContainer>
      </div>

      <BuildingDetailPanel
        isOpen={panelOpen && !!selectedEntry}
        onClose={() => setPanelOpen(false)}
        name={selectedEntry?.name || ''}
        category={selectedEntry?.category || ''}
        rooms={selectedRooms} />
      
    </div>);

}
