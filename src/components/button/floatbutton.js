import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const FloatButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Icon name="plus" size={20} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#E43F3F',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});

export default FloatButton;
