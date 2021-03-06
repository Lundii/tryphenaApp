import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

const FormInput = ({label, keyboardType, onChange}) => {
  const handleChange = inputText => {
    onChange(inputText);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View>
        <TextInput
          onChangeText={handleChange}
          style={styles.input}
          keyboardType={keyboardType}
        />
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
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderColor: '#DEDEDE',
    borderWidth: 1,
    fontFamily: 'Montserrat-Regular',
  },
  label: {
    marginBottom: 4,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  error: {
    color: 'red',
    fontFamily: 'Montserrat-Medium',
    paddingBottom: 8,
    fontSize: 12,
  },
});

export default FormInput;
