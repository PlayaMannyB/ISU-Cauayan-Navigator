import { useEffect, useState } from 'react';
import { Circle, CircleMarker } from 'react-leaflet';

export type UserLocation = {
  center: [number, number];
  accuracy: number;
};

interface UserLocationLayerProps {
  onStatusChange?: (status: string | null) => void;
  onPositionChange?: (position: UserLocation | null) => void;
}

const LOCATION_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  maximumAge: 10_000,
  timeout: 15_000
};

export function UserLocationLayer({
  onStatusChange,
  onPositionChange
}: UserLocationLayerProps) {
  const [position, setPosition] = useState<UserLocation | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      onStatusChange?.('Location is not supported by this browser.');
      onPositionChange?.(null);
      return;
    }

    const handleSuccess = (nextPosition: GeolocationPosition) => {
      const nextLocation = {
        center: [nextPosition.coords.latitude, nextPosition.coords.longitude] as [number, number],
        accuracy: nextPosition.coords.accuracy
      };
      setPosition(nextLocation);
      onPositionChange?.(nextLocation);
      onStatusChange?.(null);
    };

    const handleError = (error: GeolocationPositionError) => {
      setPosition(null);
      onPositionChange?.(null);
      onStatusChange?.(
        error.code === error.PERMISSION_DENIED
          ? 'Location access denied — enable it in your browser settings to see your position on the map'
          : 'Unable to determine your location right now.'
      );
    };

    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      LOCATION_OPTIONS
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [onPositionChange, onStatusChange]);

  if (!position) return null;

  return (
    <>
      <Circle
        center={position.center}
        radius={position.accuracy}
        pathOptions={{
          color: '#D4A437',
          fillColor: '#D4A437',
          fillOpacity: 0.16,
          weight: 1
        }}
      />
      <CircleMarker
        center={position.center}
        radius={7}
        pathOptions={{
          color: '#FFFFFF',
          fillColor: '#D4A437',
          fillOpacity: 1,
          weight: 2
        }}
      />
    </>
  );
}