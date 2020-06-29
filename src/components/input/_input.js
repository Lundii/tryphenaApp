import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  input: {
    borderRadius: 8,
    width: '100%',
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'white',
  },
});
export default Input;
