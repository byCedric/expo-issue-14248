import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Subheading } from 'react-native-paper';

export const ScreenHeader = ({ title, children }) => (
  <View style={styles.container}>
    {!!title && <Headline>{title}</Headline>}
    {!!children && <Subheading>{children}</Subheading>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
  },
});
