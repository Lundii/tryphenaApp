import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from './card';

const SiteCards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Card title="Prelimary Instuctions" />
        <BlankElement />
        <Card title="Site Details" />
      </View>
      <View style={styles.column}>
        <Card title="Observations" />
        <BlankElement />
        <Card title="Tower Member Mapping" />
      </View>
      <View style={styles.column}>
        <Card title="Tower Member Mapping" />
        <BlankElement />
        <Card title="Ancillaries table" />
      </View>
    </View>
  );
};

const BlankElement = () => {
  return <View style={styles.blank} />;
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F3F3F3',
  },
  blank: {
    width: 16,
  },
});
export default SiteCards;
