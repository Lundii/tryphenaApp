import React, {useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useField} from '../form';

const Input = ({label, field, validate}) => {
  const {setField} = useField(field);
  const [error, setError] = useState(false);

  const handleChange = inputText => {
    setField(inputText);
  };

  const handleValidation = e => {
    const {text} = e.nativeEvent;
    setError(validate(text));
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View>
        <TextInput
          onEndEditing={validate ? handleValidation : ''}
          onChangeText={handleChange}
          style={styles.input}
        />
        {error && <Text style={styles.error}>{error}</Text>}
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

export default Input;
