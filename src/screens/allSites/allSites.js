import React from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Site from './site';

const DATA = [
  {
    id: 1,
    title: 'SiteID: LG123456',
  },
  {
    id: 2,
    title: 'SiteID: LG123456',
  },
  {
    id: 3,
    title: 'SiteID: LG123456',
  },
  {
    id: 4,
    title: 'SiteID: LG123456',
  },
  {
    id: 5,
    title: 'SiteID: LG123456',
  },
  {
    id: 6,
    title: 'SiteID: LG123456',
  },
  {
    id: 7,
    title: 'SiteID: LG123456',
  },
  {
    id: 8,
    title: 'SiteID: LG123456',
  },
  {
    id: 9,
    title: 'SiteID: LG123456',
  },
  {
    id: 10,
    title: 'SiteID: LG123456',
  },
];
export const Allsites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Site title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    padding: 8,
  },
});
export default Allsites;
