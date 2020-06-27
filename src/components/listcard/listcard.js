import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import BodyText from '../text/bodytext';

const ListCard = ({sn, title, description, handlePress}) => {

  const _handlePress = () => {
    handlePress();
  };

  return (
    <TouchableOpacity onPress={_handlePress} activeOpacity={0.5}>
      <View style={styles.wrapper}>
        <View style={styles.SN}>
          <BodyText style={styles.text}>{sn}</BodyText>
        </View>
        <View>
          <BodyText style={styles.title}>{title}</BodyText>
          <BodyText style={styles.description}>{description}</BodyText>
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
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
    padding: 12,
    backgroundColor: 'white',
  },
  SN: {
    borderRadius: 50,
    backgroundColor: '#595858',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  text: {
    color: 'white',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#4d4c4c25',
  },
});

export default ListCard;
