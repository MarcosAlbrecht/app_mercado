import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from '@screens/Category';
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name='category' component={Category}/>
    </Navigator>
  );
}
