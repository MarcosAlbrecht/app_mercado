import React, { useEffect, useState } from 'react';
import { Container, Text, ContainerBody} from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/user';
import { Button } from '@components/Button';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Products } from '@screens/Products';

export function Home() {
  const dispatch = useDispatch(); 
  const state = useSelector((store) => store.user)

  function handleSignOut(){
    auth().signOut()
  }

  useEffect(() => {
    console.log('dados do state: ',state)  
    
  },[state])



  return (
    <Container>
        <ContainerBody>
          
          <Text>Ola novo {state.user?.email}</Text>
          <Products />
          <Button title='Sair' onPress={handleSignOut}></Button>
        </ContainerBody>
    </Container>
  );
}