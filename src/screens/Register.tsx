import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';

import {InputBox, Button} from '../components';
import {ShowPassword, HidePassword, Lock, Envelope} from '../components/Icons';

export default function Register() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cpassword, setCPassword] = useState<string>('');

  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [showCPassword, setShowCPassword] = useState<Boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowCPassword = () => {
    setShowCPassword(!showCPassword);
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
        <InputBox
          placeholder="Confirm Password"
          value={cpassword}
          setValue={setCPassword}
          leftIcon={<Lock />}
          rightIcon={
            showCPassword ? (
              <ShowPassword onPress={toggleShowCPassword} />
            ) : (
              <HidePassword onPress={toggleShowCPassword} />
            )
          }
        />
        <Button
          title="Register"
          onPressHandler={() => {
            console.log('Register click handler');
          }}
        />
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Already have an account?</Text>
          <Pressable style={{marginLeft: 5}}>
            <Text style={{fontSize: 15, color: 'gray', fontWeight: '500'}}>
              Login!
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
