import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {Back, Envelope} from '../components/Icons';
import {Button, InputBox} from '../components';

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>('');
  const navigation = useContext(NavigationContext);

  const loginHandler = () => {
    // submit email to send code to
    navigation?.navigate('Forgot-Password-Verification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Back onPress={() => navigation?.goBack()} />
      <View></View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 22, marginBottom: 10, color: '#000000'}}>
          Forgot Password?
        </Text>
        <InputBox
          title="Enter Your Email Address"
          placeholder="Email"
          value={email}
          setValue={setEmail}
          leftIcon={<Envelope />}
        />
        <Button title="Send Code" onPressHandler={loginHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
