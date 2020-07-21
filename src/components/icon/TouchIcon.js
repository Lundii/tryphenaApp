import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TouchIcon = ({name, onPress}) => {
  const handlePress = () => {
    onPress();
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.wrapper}>
      <MatIcon name={name} size={25} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TouchIcon;
