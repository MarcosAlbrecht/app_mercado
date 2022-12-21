import { Button } from '@components/Button';
import { ButtonCreateAccount } from '@components/ButtonCreateAccount';
import { Input } from '@components/Input';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { addEmail } from "@redux/actions/user";
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { Routes } from '../../../routes/AppRoutes';
import { Container, CreateAccount, LoginInputs, Text, TextCreateAccount } from './styles';

export function RegisterEmail() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');

  const[isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  function handleCreateEmail(){
    setIsLoading(true);  
    if (!email || !password || !confirmPassword) {
      return Alert.alert('Entrar','Informe email e senha.');
    }  

    if (password != confirmPassword) {
      return Alert.alert('Entrar','As senhas devem ser iguais.');  
    }
    setIsLoading(false);
    
    console.log(email);
    console.log(password);

    navigation.navigate('registerUserAddress',{email, password})   
      
     
  }

  return (

    <Container>
        <LoginInputs>
          
          <Input placeholder="email" keyboardType='email-address' onChangeText={setEmail} />
          <Input placeholder="senha" secureTextEntry={true} onChangeText={setPassword}/>
          <Input placeholder="confirmar senha" secureTextEntry={true} onChangeText={setConfirmPassword}/>
          <Button title="Próximo"  onPress={handleCreateEmail}/>
        </LoginInputs>

    </Container>
    
  );
}