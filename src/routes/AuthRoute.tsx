import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EmailVerification,
  ForgotPassword,
  ForgotPasswordVerification,
  Login,
  Register,
  ResetPassword,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function AuthRoute() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot-Password" component={ForgotPassword} />
      <Stack.Screen
        name="Forgot-Password-Verification"
        component={ForgotPasswordVerification}
      />
      <Stack.Screen name="Reset-Password" component={ResetPassword} />
      <Stack.Screen name="Email-Verification" component={EmailVerification} />
    </Stack.Navigator>
  );
}
