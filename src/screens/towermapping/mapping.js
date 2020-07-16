import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {BodyText} from '../../components/text';

const Mapping = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.column}>
          <BodyText>50*50*50</BodyText>
        </View>
        <View style={styles.column}>
          <BodyText>50*50*50</BodyText>
        </View>
        <View style={{width: 120, alignItems: 'center', paddingVertical: 12}}>
          <BodyText>50*50*50</BodyText>
        </View>
        <View style={styles.column}>
          <BodyText>50*50*50</BodyText>
        </View>
        <View style={styles.column}>
          <BodyText>50*50*50</BodyText>
        </View>
        <View style={styles.column}>
          <BodyText>50*50*50</BodyText>
        </View>
        <View style={styles.column}>
          <BodyText>50*50*50</BodyText>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export const Sec = () => {
  return (
    <View style={{paddingLeft: 16}}>
      <View style={styles.sec}>
        <BodyText style={{color: 'white'}}>1</BodyText>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  column: {
    width: 100,
    alignItems: 'center',
    paddingVertical: 12,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#4d4c4c25',
  },
  sec: {
    backgroundColor: '#FFB5B5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 6,
    padding: 6,
    width: 35,
  },
});

export default Mapping;
