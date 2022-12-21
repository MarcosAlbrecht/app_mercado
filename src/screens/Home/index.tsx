import React, { useEffect, useState } from 'react';
import { Container, Text, ContainerBody} from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/user';
import { Button } from '@components/Button';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function Home() {
  const dispatch = useDispatch(); 
  const email = useSelector((store) => store.email.email)

  function handleSignOut(){
    auth().signOut()
  }

  useEffect(() => {
    
    
  },[])



  return (
    <Container>
        <ContainerBody>
          <Text>Ola novo {email}</Text>
          <Button title='Sair' onPress={handleSignOut}></Button>
        </ContainerBody>
    </Container>
  );
}