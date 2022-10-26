import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {InputBox, Button} from '../components';
import {Back} from '../components/Icons';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const navigation = useContext(NavigationContext);

  const resetPasswordHandler = () => {
    // reset user's password
    navigation?.navigate('Login', {replace: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation?.goBack();
        }}
      />
      <Text
        style={{
          fontSize: 22,
          marginTop: 10,
          color: '#000000',
        }}>
        Reset Your Password
      </Text>
      <View>
        <InputBox
          placeholder="New Password"
          value={password}
          setValue={setPassword}
        />
        <InputBox
          placeholder="Retype New Password"
          value={cPassword}
          setValue={setCPassword}
        />
        <Button title="Reset Password" onPressHandler={resetPasswordHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
