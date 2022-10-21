import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ButtonCreateAccount } from '@components/ButtonCreateAccount';
import React from 'react';
import { Container,Text, CreateAccount, LoginInputs, TextCreateAccount } from './styles';
import { Routes } from '../../routes/AppRoutes';


export function Login() {

  function handleSignIn(){
    <Routes/>
     
  }

  return (

    <Container>
        <LoginInputs>
          <Text>MERCADO ESTRELA</Text>
          <Input placeholder="email" keyboardType='email-address' />
          <Input placeholder="senha" secureTextEntry={true}/>
          <Button title="Login"  onPress={handleSignIn}/>
        </LoginInputs>

        <CreateAccount>
          <ButtonCreateAccount title='Criar conta' ></ButtonCreateAccount>
        </CreateAccount> 
    </Container>
    
  );
}