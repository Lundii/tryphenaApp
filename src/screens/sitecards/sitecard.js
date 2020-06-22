import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Card from './card';

const SiteCards = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          <Card title="Prelimary Instuctions" navigation={navigation} />
          <BlankElement />
          <Card title="Site Details" navigation={navigation} to="SiteDetails" />
        </View>
        <View style={styles.column}>
          <Card
            title="Observations"
            navigation={navigation}
            to="Observations"
          />
          <BlankElement />
          <Card title="Tower Member Mapping" navigation={navigation} />
        </View>
        <View style={styles.column}>
          <Card title="Tower Member Mapping" navigation={navigation} />
          <BlankElement />
          <Card title="Ancillaries table" navigation={navigation} />
        </View>
      </View>
    </ScrollView>
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
    padding: 20,
    backgroundColor: '#F3F3F3',
  },
  blank: {
    width: 16,
  },
});
export default SiteCards;
