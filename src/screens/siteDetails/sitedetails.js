import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {FormInput} from '../../components/input';
import {Form} from '../../components/form';
import {SubmitButton} from '../../components/button';
import Section from '../../components/section';
import {useFetcher, useSite} from '../../hooks';

const SiteDetails = ({route}) => {
  const {siteDetails} = useSite();
  const {data, request, isLoading, error} = useFetcher('PUT');
  const {
    _id,
    siteid,
    address,
    date,
    latitude,
    longitude,
    baseplatedimension,
    columndimension,
    sitedimension,
    stubdimension,
    towerdetails,
  } = siteDetails;

  const handlePress = (alldetails = {}) => {
    const {
      columnbreadth,
      columnlength,
      columnwidth,
      latitude: lat,
      longitude: long,
      platelength,
      platebreadth,
      platewidth,
      sitebreadth,
      sitelength,
      stubheight,
      stubsection,
      towerbottom,
      towerheight,
      towerlegs,
      towermodel,
      towerheeltoheel,
      towerneck,
      towertop,
    } = alldetails;

    const updatedSite = {
      address,
      createdby: 'Monday',
      latitude: lat,
      longitude: long,
      stubdimension: {
        section: stubsection,
        height: stubheight,
      },
      sitedimension: {
        length: sitelength,
        breadth: sitebreadth,
      },
      baseplatedimension: {
        length: platelength,
        breadth: platebreadth,
        width: platewidth,
      },
      columndimension: {
        length: columnlength,
        breadth: columnbreadth,
        width: columnwidth,
      },
      towerdetails: {
        towerheight: towerheight,
        model: towermodel,
        nooflegs: towerlegs,
        heeltoheel: towerheeltoheel,
        bottom: towerbottom,
        top: towertop,
        neck: towerneck,
      },
    };

    request(
      `https://tryphena-staging.herokuapp.com/dash/site/${_id}`,
      updatedSite,
    );
  };
  return (
    <ScrollView>
      <Form>
        <Section header="Basic Site Info">
          <FormInput label="Site ID" field="siteid" initialValue={siteid} />
          <FormInput label="Date and Time" field="date" initialValue={date} />
          <FormInput
            label="Site Address"
            field="address"
            initialValue={address}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <FormInput
                label="Latitude"
                field="latitude"
                initialValue={latitude}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Longitude"
                field="longitude"
                initialValue={longitude}
              />
            </View>
          </View>
        </Section>
        <Section header="Stub Dimension">
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <FormInput
                label="Section"
                field="stubsection"
                initialValue={`${(stubdimension && stubdimension.section) ||
                  ''}`}
                keyboardType="numeric"
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Height"
                field="stubheight"
                initialValue={`${(stubdimension && stubdimension.height) ||
                  ''}`}
              />
            </View>
          </View>
        </Section>
        <Section header="Site Dimension">
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <FormInput
                label="Length"
                field="sitelength"
                initialValue={`${(sitedimension && sitedimension.length) ||
                  ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Breadth"
                field="sitebreadth"
                initialValue={`${(sitedimension && sitedimension.breadth) ||
                  ''}`}
              />
            </View>
          </View>
        </Section>
        <Section header="Base plate Dimension">
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <FormInput
                label="Length"
                field="platelength"
                initialValue={`${(baseplatedimension &&
                  baseplatedimension.length) ||
                  ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Breadth"
                field="platebreadth"
                initialValue={`${(baseplatedimension &&
                  baseplatedimension.breadth) ||
                  ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="width"
                field="platewidth"
                initialValue={`${(baseplatedimension &&
                  baseplatedimension.width) ||
                  ''}`}
              />
            </View>
          </View>
        </Section>
        <Section header="Column Dimension">
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <FormInput
                label="Length"
                field="columnlength"
                initialValue={`${(columndimension && columndimension.length) ||
                  ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Breath"
                field="columnbreadth"
                initialValue={`${(columndimension && columndimension.breadth) ||
                  ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Width"
                field="columnwidth"
                initialValue={`${(columndimension && columndimension.width) ||
                  ''}`}
              />
            </View>
          </View>
        </Section>
        <Section header="Tower Details">
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <FormInput
                label="Tower height"
                field="towerheight"
                initialValue={`${(towerdetails && towerdetails.towerheight) ||
                  ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Make/Model"
                field="towermodel"
                initialValue={`${(towerdetails && towerdetails.model) || ''}`}
              />
            </View>
          </View>
          <FormInput label="Number of tower legs" field="towerlegs" />
          <FormInput
            label="Tower heel to heel"
            field="towerheeltoheel"
            initialValue={`${(towerdetails && towerdetails.heeltoheel) || ''}`}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <FormInput
                label="Bottom"
                field="towerbottom"
                initialValue={`${(towerdetails && towerdetails.bottom) || ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Top"
                field="towertop"
                initialValue={`${(towerdetails && towerdetails.top) || ''}`}
              />
            </View>
            <BlankElement />
            <View style={{flex: 1}}>
              <FormInput
                label="Neck"
                field="towerneck"
                initialValue={`${(towerdetails && towerdetails.neck) || ''}`}
              />
            </View>
          </View>
        </Section>
        <View style={{padding: 16}}>
          <SubmitButton onPress={handlePress} title="Save Details" />
        </View>
      </Form>
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
