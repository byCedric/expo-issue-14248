import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppVersion } from './app-version';

export const Screen = ({ children }) => (
  <SafeAreaView style={styles.layout}>
    <View style={styles.content}>
      {children}
    </View>
    <View style={styles.version}>
      <AppVersion />
    </View>
    <StatusBar style="auto" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  version: {
    flex: 0,
    alignItems: 'center',
    marginVertical: 32,
  }
});
