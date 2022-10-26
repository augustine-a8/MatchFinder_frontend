import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Router from './src/routes/Router';

const Stack = createNativeStackNavigator();

export default () => {
  return <Router />;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 25,
  },
  title: {
    fontWeight: '600',
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 22,
  },
});
