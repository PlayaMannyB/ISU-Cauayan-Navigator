import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface MapControllerProps {
  target: [number, number];
  zoom: number;
}

export function MapController({ target, zoom }: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    if (!map || !target) return;

    const timer = window.setTimeout(() => {
      map.flyTo(target, zoom, {
        duration: 1.6,
        easeLinearity: 0.25
      });
    }, 400);

    return () => {
      window.clearTimeout(timer);
    };
  }, [map, target, zoom]);

  return null;
}
