import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Mapping, {Sec} from './mapping';
import {BodyText} from '../../components/text';

const TowerMapping = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{width: 70}}>
          <View
            style={{
              ...styles.column,
              alignItems: 'flex-start',
              paddingVertical: 16,
              backgroundColor: 'white',
              paddingLeft: 16,
            }}>
            <BodyText style={styles.header}>Sec</BodyText>
          </View>
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
          <Sec />
        </View>
        <ScrollView horizontal={true}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 16,
                backgroundColor: 'white',
              }}>
              <View style={styles.column}>
                <BodyText style={styles.header}>Length</BodyText>
              </View>
              <View style={styles.column}>
                <BodyText style={styles.header}>Diagonal</BodyText>
              </View>
              <View
                style={{
                  width: 120,
                  alignItems: 'center',
                }}>
                <BodyText style={styles.header}>Horizontal</BodyText>
              </View>
              <View style={styles.column}>
                <BodyText style={styles.header}>In-plan</BodyText>
              </View>
              <View style={styles.column}>
                <BodyText style={styles.header}>Sub</BodyText>
              </View>
              <View style={styles.column}>
                <BodyText style={styles.header}>Hip</BodyText>
              </View>
              <View style={styles.column}>
                <BodyText style={styles.header}>Remark</BodyText>
              </View>
            </View>
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
            <Mapping />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  column: {
    width: 100,
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'black',
  },
});

export default TowerMapping;
