/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import {FormInput} from '../../components/input';
import {SubmitButton} from '../../components/button';
import Section from '../../components/section';
import {BodyText} from '../../components/text';
import {Form, useAutoSubmit} from '../../components/form';
import {AuthContext} from '../../context/authContext';
import {useFetcher} from '../../hooks';
import ImagePicker from 'react-native-image-crop-picker';

const Login = ({navigation}) => {
  const [authState, authDispatch] = useContext(AuthContext);
  const {data, request, isLoading, error} = useFetcher('POST');
  console.log(error);

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

  const takePicture = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };


  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={takePicture}>
        <BodyText>Open camera</BodyText>
      </TouchableOpacity> */}
      <StatusBar backgroundColor="#E43F3F" />
      <ScrollView
        style={styles.card}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <Section header="Login">
          {!!error && (
            <BodyText style={{color: 'red', fontSize: 14, paddingBottom: 8}}>
              {`${error}`}
            </BodyText>
          )}
          <Form>
            <FormInput
              label="Email"
              field="email"
              validate={value => (value ? null : 'Username is required')}
            />
            <FormInput
              label="Password"
              field="password"
              validate={value => (value ? null : 'Password is required')}
            />
            <SubmitButton title="Login" onPress={handlePress}>
              {isLoading && <ActivityIndicator color="white" />}
            </SubmitButton>
          </Form>
        </Section>
      </ScrollView>
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
