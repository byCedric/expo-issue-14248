import * as Location from 'expo-location';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Caption } from 'react-native-paper';

import { PickAccuracy } from './components/pick-accuracy';
import { Screen } from './components/screen';
import { ScreenHeader } from './components/screen-header';
import { useLocationPermission } from './hooks/location';

export default function App() {
  const [permission, requestPermission] = useLocationPermission();
  const [accuracy, setAccuracy] = useState(undefined);
  const [location, setLocation] = useState(undefined);

  // Quick check to disable the button and picker
  const isLoading = location === null;

  const onLocatePress = useCallback(() => {
    setLocation(null);
    Location.getCurrentPositionAsync({ accuracy })
      .then(setLocation)
      .catch((error) => {
        console.error('onLocatePress', 'Could not fetch location', error);
        setLocation(undefined);
      });
  }, [accuracy]);

  useEffect(() => setLocation(undefined), [accuracy]);

  if (!permission?.granted) {
    return (
      <Screen>
        <ScreenHeader title="Location permissions">
          To test the location provider, we need your permission to use it.
        </ScreenHeader>
        <Button onPress={requestPermission} mode="contained">
          Grant location permission
        </Button>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScreenHeader title="Let's find your location">
        You can modify the <Caption>accuracy</Caption> property before locating yourself. When you are ready, press the button.
      </ScreenHeader>
      <PickAccuracy disabled={isLoading} accuracy={accuracy} onAccuracy={setAccuracy} />
      <Button disabled={isLoading} onPress={onLocatePress} mode="contained">Locate me!</Button>
      <Caption style={{ marginTop: 16, padding: 16, backgroundColor: '#fff', borderRadius: 4, textAlign: location ? 'left' : 'center' }}>
        {location
          ? JSON.stringify(location, null, 2)
          : '-'
        }
      </Caption>
    </Screen>
  );
}
