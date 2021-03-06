import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {BodyText} from '../text';
import {useField} from '../form';

const Switch = ({field, onChange, initialValue}) => {
  const {setField} = useField(field);
  const [initValue, setInitValue] = useState(initialValue);
  const [value, setValue] = useState(false);

  const handlePress = () => {
    setField(initValue ? 'no' : 'yes');
    onChange(!value);
    setValue(!value);
  };

  useEffect(() => {
    setField(initValue || 'no');
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <PositiveButton value={value}>
        <BodyText>Yes</BodyText>
      </PositiveButton>
      <NegativeButton value={value}>
        <BodyText>No</BodyText>
      </NegativeButton>
    </TouchableOpacity>
  );
};

const PositiveButton = styled.View`
  padding: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${({value}) => (value ? '#99E2B2' : '#F3F3F3')};
`;

const NegativeButton = styled.View`
  padding: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${({value}) => (value ? '#F3F3F3' : '#FF6666')};
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  positiveButton: {
    padding: 8,
    backgroundColor: '#99E2B2',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  negativeButton: {
    padding: 8,
    backgroundColor: '#F3F3F3',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default Switch;
