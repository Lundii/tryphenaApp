import React, {useState, useContext} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import {AuthContext} from '../../context/authContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authState, authDispatch] = useContext(AuthContext);

  const handleEmailChange = emailText => {
    setEmail(emailText);
  };

  const handlePasswordChange = passwordText => {
    setPassword(passwordText);
  };

  const handlePress = async () => {
    console.log(email);
    fetch('https://tryphena-staging.herokuapp.com/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        authDispatch({type: 'SIGNIN', token: 'whatawonderfultoken'});
        console.log(data);
      })
      .catch(error => {
        navigation.navigate('Home');
        console.log('i am here');
        console.error(error);
      });
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/homeImage.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Input placeholder="Email" onChangeText={handleEmailChange} />
          <Input placeholder="Password" onChangeText={handlePasswordChange} />
          <Button title="Login" onPress={handlePress} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Login;
