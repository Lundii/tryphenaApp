import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Section = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.header}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 16,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  header: {
    position: 'absolute',
    top: -12,
    left: 10,
    // fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
});
export default Section;
