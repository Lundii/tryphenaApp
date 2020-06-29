import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalBlank = () => {
  return <View style={styles.blank} />;
};

const styles = StyleSheet.create({
  blank: {
    width: 16,
  },
});
export default VerticalBlank;
