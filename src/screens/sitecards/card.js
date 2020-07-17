import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {BodyText} from '../../components/text';

const Card = ({title, navigation, to, children, params}) => {
  const handlePress = () => {
    navigation.navigate(to, params);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 2}}>
        {children}
      </View>
      <View>
        <BodyText style={styles.title}>{title}</BodyText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    marginTop: 'auto',
  },
});

export default Card;
