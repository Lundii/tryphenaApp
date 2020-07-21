/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {Button, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FormContext} from '../form/formcontext';

const SubmitButton = ({onPress, title}) => {
  const [formValues] = useContext(FormContext);
  const handlePress = () => {
    onPress(formValues);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{...styles.button}}
      activeOpacity={0.9}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    padding: 12,
    width: '100%',
    backgroundColor: '#FF6666',
    alignItems: 'center',
    borderRadius: 8,
  },
});
export default SubmitButton;
