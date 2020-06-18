import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Site from './site';

const DATA = [
  {
    id: 1,
    title: 'First site',
  },
  {
    id: 2,
    title: 'First site',
  },
  {
    id: 3,
    title: 'First site',
  },
  {
    id: 4,
    title: 'First site',
  },
];
export const Allsites = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Site title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Allsites;
