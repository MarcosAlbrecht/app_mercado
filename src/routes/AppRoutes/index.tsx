import { NavigationContainer } from "@react-navigation/native";
import { Login } from '@screens/Login';
import { useState } from 'react';
import { AppRoutes } from './App.routes';

export function Routes(){
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return(      
         <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
        
    );
}