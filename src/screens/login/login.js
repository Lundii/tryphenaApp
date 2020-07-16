/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Input from '../../components/input';
import {SubmitButton} from '../../components/button';
import Section from '../../components/section';
import {BodyText} from '../../components/text';
import {Form} from '../../components/form';
import {AuthContext} from '../../context/authContext';
import {useFetcher} from '../../hooks';

const Login = ({navigation}) => {
  const [authState, authDispatch] = useContext(AuthContext);
  const {data, request, isLoading, error} = useFetcher('POST');

  const handlePress = ({email, password}) => {
    request('https://tryphena-staging.herokuapp.com/auth/login', {
      email,
      password,
    });
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  useEffect(() => {
    if (data && data.token) {
      authDispatch({type: 'SIGNIN', token: data && data.token});
    }
  }, [data, authDispatch]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E43F3F" />
      <View style={styles.card}>
        <Section header="Login">
          {/* {error && (
            <Text style={{color: 'red', fontSize: 14, paddingBottom: 8}}>
              {`${error}`}
            </Text>
          )} */}
          <Form>
            <Input
              label="Email"
              field="email"
              validate={value => (value ? null : 'Username is required')}
            />
            <Input
              label="Password"
              field="password"
              validate={value => (value ? null : 'Password is required')}
            />
            <SubmitButton title="Login" onPress={handlePress} />
          </Form>
        </Section>
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
