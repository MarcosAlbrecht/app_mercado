import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens/Login";
import { RegisterEmail } from "@screens/Register/Email";
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

export function LoginRegisterRoutes(){
    return(
      <Navigator screenOptions={{
            headerStyle:{
              backgroundColor: '#0000FF', 
            },
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff', 
            headerTitleStyle: {
                fontWeight: 'bold',
            },  
            }}>
            <Screen name="login" component={Login}/>
            <Screen name="registerEmail" component={RegisterEmail} options={{title: "Criar Conta"}}/>
        </Navigator>
    )
}