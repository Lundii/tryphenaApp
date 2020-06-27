import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components';
import BodyText from '../text/bodytext';

const ListCard = ({sn}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.SN}>
          <BodyText style={styles.text}>{sn}</BodyText>
        </View>
        <View style={styles.description}>
          <BodyText>Faded</BodyText>
          <BodyText>Leg A</BodyText>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const Wrapper = styled.View`
  flex-direction: row;
  padding: 16px;
`;
const SN = styled.View`
  boarder-radius: 50%;
  background-color: black;
`;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
  },
  SN: {
    borderRadius: 50,
    backgroundColor: '#595858',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  description: {
    paddingLeft: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#4d4c4c25',
  },
});

export default ListCard;
