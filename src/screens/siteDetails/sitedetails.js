import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/input';
import Section from '../../components/section';

const SiteDetails = ({navigation}) => {
  return (
    <ScrollView>
      <Section header="Basic Site Info">
        <Input label="Site ID" />
        <Input label="Date and Time" />
        <Input label="Site Address" />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input label="Latitude" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Longitude" />
          </View>
        </View>
      </Section>
      <Section header="Stub Dimension">
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input label="Section" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Height" />
          </View>
        </View>
      </Section>
      <Section header="Site Dimension">
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input label="Length" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Breath" />
          </View>
        </View>
      </Section>
      <Section header="Base plate Dimension">
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input label="Length" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Breath" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Height" />
          </View>
        </View>
      </Section>
      <Section header="Column Dimension">
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input label="Length" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Breath" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Height" />
          </View>
        </View>
      </Section>
      <Section header="Tower Details">
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input label="Tower height" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Make/Model" />
          </View>
        </View>
        <Input label="Number of tower legs" />
        <Input label="Tower heel to heel" />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Input label="Button" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Top" />
          </View>
          <BlankElement />
          <View style={{flex: 1}}>
            <Input label="Neck" />
          </View>
        </View>
      </Section>
    </ScrollView>
  );
};
const BlankElement = () => {
  return <View style={styles.blank} />;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  blank: {
    width: 16,
  },
});

export default SiteDetails;
