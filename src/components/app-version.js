import * as Application from 'expo-application';
import React from 'react';
import { Paragraph } from 'react-native-paper';

export const AppVersion = () => (
  <Paragraph>Version {Application.nativeApplicationVersion} ({Application.nativeBuildVersion})</Paragraph>
);
