import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';
import {ShowPassword, HidePassword, Lock, Envelope} from '../components/Icons';
import {NavigationContext} from '@react-navigation/native';

import {InputBox, Button} from '../components';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigation = useContext(NavigationContext);

  const handleLogin = () => {
    // login user
    // store user token in asyncstorage for successful authentication
    console.log('User Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View>
        <InputBox
          placeholder="Email"
          value={email}
          setValue={setEmail}
          leftIcon={<Envelope />}
        />
        <InputBox
          placeholder="Password"
          value={password}
          setValue={setPassword}
          leftIcon={<Lock />}
          rightIcon={
            showPassword ? (
              <ShowPassword onPress={toggleShowPassword} />
            ) : (
              <HidePassword onPress={toggleShowPassword} />
            )
          }
        />
        <Button title="Login" onPressHandler={handleLogin} />
        <Pressable
          style={{marginTop: 10}}
          onPress={() => navigation?.navigate('Forgot-Password')}>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 15,
              fontWeight: '500',
              color: '#000000',
            }}>
            Forgot Password?
          </Text>
        </Pressable>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, color: '#000000'}}>
            Don't have an account?
          </Text>
          <Pressable
            style={{marginLeft: 5}}
            onPress={() => navigation?.navigate('Register')}>
            <Text style={{fontSize: 15, color: '#000000', fontWeight: '500'}}>
              SignUp Now!
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  formControlBox: {
    marginVertical: 5,
  },
  formLabel: {
    marginVertical: 3,
  },
  formInputBox: {
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
