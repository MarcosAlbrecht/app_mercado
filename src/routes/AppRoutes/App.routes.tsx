import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from '@screens/Category';
import React from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#ffffff', 
        },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: '#000000', 
        headerTitleStyle: {
            fontWeight: 'bold',
        },  
        }}>
        <Screen  name='category' component={Category} options={{title: "Categorias"}} />
        {/* <Screen  name='category' component={Category} options={({ navigation }) => ({
            title: 'Awesome app',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} >
                <ArrowLeft size={28} color="black"></ArrowLeft>
              </TouchableOpacity>
            ),
          })} /> */}
    </Navigator>
  );
}



