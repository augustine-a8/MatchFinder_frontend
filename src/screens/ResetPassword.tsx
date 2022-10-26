import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {InputBox, Button} from '../components';
import {Back} from '../components/Icons';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const navigation = useContext(NavigationContext);

  const resetPasswordHandler = () => {
    // reset user's password
    navigation?.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Back
        onPress={() => {
          navigation?.goBack();
        }}
      />
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
