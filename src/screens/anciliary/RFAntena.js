import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import ListCard from '../../components/listcard';
import {FloatButton} from '../../components/button';

const DATA = [
  {
    sn: 1,
    type: 'Faded',
    leg: 'LEG A',
  },
  {
    sn: 2,
    type: 'Faded',
    leg: 'LEG B',
  },
  {
    sn: 3,
    type: 'Faded',
    leg: 'LEG C',
  },
  {
    sn: 4,
    type: 'Faded',
    leg: 'LEG A',
  },
  {
    sn: 5,
    type: 'Faded',
    leg: 'LEG B',
  },
  {
    sn: 6,
    type: 'Faded',
    leg: 'LEG A',
  },
];

const RFAntenna = () => {
  const handlePress = () => {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <ListCard
              sn={item.sn}
              title={item.type}
              description={item.leg}
              handlePress={handlePress}
            />
          )}
          keyExtractor={item => item.sn}
        />
      </View>
      <FloatButton />
    </SafeAreaView>
  );
};

export default RFAntenna;
