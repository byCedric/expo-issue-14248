import { Accuracy } from 'expo-location';
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';

const accuracyOptions = [
  { value: undefined, label: 'undefined' },
  { value: Accuracy.Lowest, label: 'Accuracy.Lowest' },
  { value: Accuracy.Low, label: 'Accuracy.Low' },
  { value: Accuracy.Balanced, label: 'Accuracy.Balanced' },
  { value: Accuracy.High, label: 'Accuracy.High' },
  { value: Accuracy.Highest, label: 'Accuracy.Highest' },
  { value: Accuracy.BestForNavigation, label: 'Accuracy.BestForNavigation' },
];

export const PickAccuracy = ({ accuracy, onAccuracy, disabled = false }) => (
  <>
  <Paragraph>Accuracy</Paragraph>
  <Picker
    style={styles.picker}
    enabled={!disabled}
    selectedValue={accuracy}
    onValueChange={(itemValue) => onAccuracy(itemValue)}
  >
    {accuracyOptions.map(option => (
      <Picker.Item key={option.label} {...option} />
    ))}
  </Picker>
  </>
);

const styles = StyleSheet.create({
  picker: {
    paddingVertical: 16,
    marginBottom: 16,
  },
});
