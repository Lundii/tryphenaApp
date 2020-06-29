import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Input from '../../components/input';
import {Button} from '../../components/button';
import Card from '../../components/section';
import {BodyText} from '../../components/text';
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
    <View style={styles.container}>
      <View style={styles.card}>
        <Card header="Login">
          <Input label="Email" onChangeText={handleEmailChange} />
          <Input label="Password" onChangeText={handlePasswordChange} />
          <Button title="Login" onPress={handlePress} />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flex: 1,
  },
  card: {
    width: '100%',
  },
});

export default Login;
