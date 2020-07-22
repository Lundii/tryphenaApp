/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FormContext} from '../form/formcontext';

const SubmitButton = ({onPress, title, children}) => {
  const [formValues] = useContext(FormContext);
  const handlePress = () => {
    onPress(formValues);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{...styles.button}}
      activeOpacity={0.9}>
      {children}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    paddingHorizontal: 24,
  },
  button: {
    padding: 12,
    width: '100%',
    backgroundColor: '#FF6666',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
});
export default SubmitButton;
