import React from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';
import ListCard from '../../components/listcard';
import {FloatButton} from '../../components/button';

const DATA = [
  {
    sn: 1,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 2,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 3,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 4,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 5,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 6,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 7,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 8,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 9,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
  {
    sn: 10,
    siteID: 'IHS_LAG_0008A',
    address: 'Ladipo Estate, Oshodi.',
  },
];

const Allsites = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('SiteCards');
  };
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <ListCard
              sn={item.sn}
              title={item.siteID}
              description={item.address}
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

export default Allsites;
