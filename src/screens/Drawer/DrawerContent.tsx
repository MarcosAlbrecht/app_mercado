import React, { useEffect } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Container, UserInfoSection, NameUser, DrawerSection, DrawerSectionBottom } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';


import { useNavigation } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export function DrawerContent(props: any){
    const navigation = useNavigation();
    const state = useSelector((store) => store.user)

    useEffect(() => {
        //console.log('dados do state: ',state)  
        
    },[state])

    function handleSignOut(){
        console.log('clicou em sair') 
        
        Alert.alert(
            "Sair",
            "Deseja deslogar do aplicativo?",
            [
              {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => auth().signOut() }
            ]
          );
    }

    return(
        <Container>
            <DrawerContentScrollView {...props}>
                <Container>
                    <UserInfoSection>
                        {state.user?.email ?       
                            <NameUser>Olá {state.user?.email}</NameUser>
                            :
                            <NameUser>Olá...</NameUser>
                        }
                    </UserInfoSection> 
                    <Drawer.Section>
                        <DrawerSection>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate('Home')}}
                        />   
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="selection-search" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Categorias"
                            onPress={() => {navigation.navigate('Category')}}
                        />   
                        </DrawerSection>
                    </Drawer.Section>
                     
                </Container>
            </DrawerContentScrollView>
            <Drawer.Section>
                        <DrawerSectionBottom>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="exit-to-app" 
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Sair"
                                onPress={handleSignOut}
                            />
                        </DrawerSectionBottom>
                    </Drawer.Section>                    
        </Container>
    )
}