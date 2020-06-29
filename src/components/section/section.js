import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Section = ({header, children}) => {
  return (
    <View>
      <View header={header} style={styles.container}>
        {header && <Text style={styles.header}>{header}</Text>}
        {children}
      </View>
      <View style={styles.divider} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
  },
  header: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#4d4c4c25',
  },
});
export default Section;
