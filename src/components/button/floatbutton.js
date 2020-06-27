import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BodyText from '../text';
import {TouchableOpacity, StyleSheet} from 'react-native';

const FloatButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="plus"  size={15} color="white" />
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
  },
});

export default FloatButton;
