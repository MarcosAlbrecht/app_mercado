import { Loading } from "@components/Loading";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from "@react-navigation/native";
import { addEmail } from "@redux/actions/user";
import { Login } from '@screens/Login';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppRoutes } from './app.routes';
import { LoginRegisterRoutes } from "./loginRegister.routes";

export function Routes(){
    const [admin, setAdmin] = useState(false);
    const [loading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    const dispatch = useDispatch();
    

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(response => {
            setUser(response);
            setIsLoading(false);
            
        })

        if (user) {
            dispatch(addEmail(user.email))
        }


        return subscriber;
    }, []);

    if (loading) {
        return <Loading />    
    }

    return(      
         <NavigationContainer>
            {user ? <AppRoutes/> : <LoginRegisterRoutes/>}
        </NavigationContainer>
        
    );
}