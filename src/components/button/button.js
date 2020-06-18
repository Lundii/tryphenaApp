import React from 'react';
import {Button, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const button = props => {
  return (
    <TouchableOpacity {...props} style={styles.button} activeOpacity={0.9}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    padding: 16,
    width: '100%',
    backgroundColor: '#FF6666',
    alignItems: 'center',
    borderRadius: 8,
  },
});
export default button;
