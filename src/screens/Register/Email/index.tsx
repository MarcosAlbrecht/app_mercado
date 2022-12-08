import { Button } from '@components/Button';
import { ButtonCreateAccount } from '@components/ButtonCreateAccount';
import { Input } from '@components/Input';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { addEmail } from "@redux/actions/user";
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Routes } from '../../../routes/AppRoutes';
import { Container, CreateAccount, LoginInputs, Text, TextCreateAccount } from './styles';

export function RegisterEmail() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');

  const[isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  function handleSignIn(){
    if (!email || !password || !confirmPassword) {
      return Alert.alert('Entrar','Informe email e senha.');
    }  

    if (password != confirmPassword) {
      return Alert.alert('Entrar','As senhas devem ser iguais.');  
    }

    setIsLoading(true);

    auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      console.log(error)
      setIsLoading(false);

      if (error.code === 'auth/invalid-email') {
        return Alert.alert('Entrar', 'E-mail inválido');
      }
      if (error.code === 'auth/user-not-found') {
          return Alert.alert('Entrar', 'E-mail ou senha inválido');   
      }
      if (error.code === 'auth/wrong-password') {
          return Alert.alert('Entrar', 'E-mail ou senha inválido');
      }

      return Alert.alert('Entrar', 'Não foi possível acessar');

    } )

      console.log(email);
      console.log(password);
      dispatch(addEmail(email))
     
  }

  return (

    <Container>
        <LoginInputs>
          <Text>MERCADO ESTRELA</Text>
          <Input placeholder="email" keyboardType='email-address' onChangeText={setEmail} />
          <Input placeholder="senha" secureTextEntry={true} onChangeText={setPassword}/>
          <Input placeholder="confirmar senha" secureTextEntry={true} onChangeText={setConfirmPassword}/>
          <Button title="Próximo"  onPress={() => {}}/>
        </LoginInputs>

    </Container>
    
  );
}