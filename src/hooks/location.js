import * as Location from 'expo-location';
import { useCallback, useEffect, useState } from 'react';

// Use the newer foreground permission methods, or fallback to the old one.
const requestLocationPermission = Location.requestForegroundPermissionsAsync || Location.requestPermissionsAsync;
const getLocationPermission = Location.getForegroundPermissionsAsync || Location.getPermissionsAsync

/**
 * Retrieve and/or request permission to use the location.
 * This uses the foreground location if available, or the older combined permissions.
 */
export function useLocationPermission() {
  const [permission, setPermission] = useState(null);

  const getPermission = useCallback(() => {
    getLocationPermission()
      .then(setPermission)
      .catch((error) => {
        console.error('useLocationPermission', 'failed to retrieve permission status', error);
      });
  }, [setPermission]);

  const requestPermission = useCallback(() => {
    requestLocationPermission()
      .then(setPermission)
      .catch((error) => {
        console.error('useLocationPermission', 'failed to request permission', error);
      });
  }, [setPermission]);

  useEffect(() => getPermission(), [getPermission]);

  return [permission, requestPermission];
}
