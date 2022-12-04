import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from '@screens/Category';
import { Home } from "@screens/Home";

import React from 'react';

import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";


const { Navigator, Screen } = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

export function AppRoutes() {
  return (
  //   <Navigator screenOptions={{
  //     headerStyle:{
  //       backgroundColor: '#ffffff', 
  //     },
  //     headerShadowVisible: false,
  //     headerTitleAlign: 'center',
  //     headerTintColor: '#000000', 
  //     headerTitleStyle: {
  //         fontWeight: 'bold',
  //     },  
  //     }}>
  //     <Screen  name='home' component={Home} options={{title: "Início"}} />    
  //     <Screen  name='category' component={Category} options={{title: "Categorias"}} />
     
  // </Navigator>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Category" component={Category} />
    </Drawer.Navigator>
  );
}



