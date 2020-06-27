import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Section from '../../components/section';
import ListCard from '../../components/listcard';
import BodyText from '../../components/text/bodytext';
import {FloatButton} from '../../components/button';

const RFAntenna = () => {
  return (
    <View>
      <ScrollView>
        <ListCard sn={1} />
        <ListCard sn={2} />
        <ListCard sn={3} />
        <ListCard sn={4} />
        <ListCard sn={5} />
        <ListCard sn={6} />
        <ListCard sn={7} />
        <ListCard sn={5} />
        <ListCard sn={6} />
        <ListCard sn={7} />
      </ScrollView>
      <FloatButton />
    </View>
  );
};

export default RFAntenna;
