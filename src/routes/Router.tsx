import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './AuthRoute';

export default function Router() {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
}
