import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({title, navigation, to}) => {
  const handlePress = () => {
    navigation.navigate(to);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    height: 170,
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
    alignSelf: 'baseline',
    marginTop: 'auto',
  },
});

export default Card;
