import React, { useEffect, useState } from 'react';
import { Container, Text, ContainerBody} from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/user';

export function Home() {
  const dispatch = useDispatch(); 
  const email = useSelector((store) => store.email.email)

  useEffect(() => {
    
    
  },[])

  return (
    <Container>
        <ContainerBody>
          <Text>Ola novo {email}</Text>
        </ContainerBody>
    </Container>
  );
}