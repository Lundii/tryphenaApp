import React from 'react';
import {View, ActivityIndicator, StyleSheet, Image} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/tryphenaLogo.jpg')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
