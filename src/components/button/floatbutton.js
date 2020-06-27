import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const FloatButton = ({handlePress}) => {
  const _handlePress = () => {
    handlePress();
  };

  return (
    <TouchableOpacity onPress={_handlePress} style={styles.container}>
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
    backgroundColor: '#FF6666',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});

export default FloatButton;
