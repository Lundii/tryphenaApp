import React, {useState, useContext} from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../../components/input/cusInput';
import Button from '../../components/button';
import Card from '../../components/section';
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
        <Card>
          <Text style={{fontSize: 24, fontFamily: 'Montserrat-Medium', marginBottom: 16}}>
            Login
          </Text>
          <Input label="Email" onChangeText={handleEmailChange} />
          <Input label="Password" onChangeText={handlePasswordChange} />
          <Button title="Login" onPress={handlePress} />
        </Card>
      </View>
      {/* </ImageBackground> */}
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
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Login;
