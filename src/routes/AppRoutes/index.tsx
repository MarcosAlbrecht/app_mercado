import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Login } from '@screens/Login';
import { useState, useEffect } from 'react';
import { AppRoutes } from './app.routes';
import { Loading } from "@components/Loading";

export function Routes(){
    const [admin, setAdmin] = useState(false);
    const [loading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(response => {
            setUser(response);
            setIsLoading(false);
        })

        return subscriber;
    }, []);

    if (loading) {
        return <Loading />    
    }

    return(      
         <NavigationContainer>
            {user ? <AppRoutes/> : <Login/>}
        </NavigationContainer>
        
    );
}