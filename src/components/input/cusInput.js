import React from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View>
        <TextInput {...props} style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  input: {
    borderRadius: 4,
    marginBottom: 8,
    padding: 6,
    backgroundColor: 'white',
    borderColor: '#DEDEDE',
    borderWidth: 1,
  },
  label: {
    marginBottom: 4,
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
});

export default Input;
