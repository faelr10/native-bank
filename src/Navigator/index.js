// AppNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PageInitial from '../components/PageInitial';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <PageInitial/>
    </NavigationContainer>
  );
}

export default AppNavigator;
