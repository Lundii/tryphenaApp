import React from 'react';
import {ScrollView, View} from 'react-native';
import Section from '../../components/section';
import {BodyText} from '../../components/text';
import Switch from '../../components/switch';

const Observations = () => {
  return (
    <ScrollView>
      <Section>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 3, paddingRight: 2}}>
            <BodyText>
              Are the loadings on the tower evenly distributed across all legs
              or is one leg more loaded than the others?
            </BodyText>
          </View>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Switch />
          </View>
        </View>
      </Section>
      <Section>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 3, paddingRight: 2}}>
            <BodyText>
              Are the loadings on the tower evenly distributed across all legs
              or is one leg more loaded than the others?
            </BodyText>
          </View>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Switch />
          </View>
        </View>
      </Section>
    </ScrollView>
  );
};

export default Observations;
