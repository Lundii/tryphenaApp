import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BodyText = props => {
  return (
    <Text {...props} style={{...props.style, ...styles.text}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
  },
});

export default BodyText;
