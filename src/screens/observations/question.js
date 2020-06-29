import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BodyText} from '../../components/text';
import Switch from '../../components/switch';

const Question = ({question, children}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.textCont}>
          <BodyText>{question}</BodyText>
        </View>
        <View style={styles.switchCont}>
          <Switch />
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 16,
  },
  textCont: {
    flex: 3,
    paddingRight: 2,
  },
  switchCont: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default Question;
