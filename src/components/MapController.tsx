import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface MapControllerProps {
  target: [number, number];
  zoom: number;
  /** When true, temporarily disable map dragging while flyTo runs */
  disableDragDuringFly?: boolean;
}

export function MapController({ target, zoom, disableDragDuringFly = true }: MapControllerProps) {
  const map = useMap();


  useEffect(() => {
    if (!map || !target) return;

    const draggingWasEnabled = map.dragging?.enabled ?? true;


    if (disableDragDuringFly) {
      map.dragging?.disable();
    }


    const timer = window.setTimeout(() => {
      map.flyTo(target, zoom, {
        duration: 1.6
      });


      // Re-enable drag slightly after the animation completes.
      window.setTimeout(() => {
        // Re-enable only if it was enabled before and the prop is still on
        if (disableDragDuringFly && draggingWasEnabled) {
          map.dragging?.enable();
        }
      }, 1700);

    }, 400);

    return () => {
      window.clearTimeout(timer);
      // Only re-enable if we disabled it
      if (disableDragDuringFly && draggingWasEnabled) map.dragging?.enable();
    };
  }, [map, target, zoom, disableDragDuringFly]);


  return null;
}
