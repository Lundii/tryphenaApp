import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Switch from '../../components/switch';

const Site = ({title, navigation}) => {
  const handleClick = () => {
    navigation.navigate('SiteCards');
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    height: 70,
    marginVertical: 8,
    marginHorizontal: 16,
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
    fontSize: 16,
    marginTop: 'auto',
    textAlign: 'right',
  },
});

export default Site;
