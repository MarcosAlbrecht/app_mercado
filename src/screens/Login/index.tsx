import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ButtonCreateAccount } from '@components/ButtonCreateAccount';
import React from 'react';
import { View } from 'react-native';
import { Container,Text, CreateAccount, LoginInputs, TextCreateAccount } from './styles';

export function Login() {
  return (

    <Container>
        <LoginInputs>
          <Text>MERCADO ESTRELA</Text>
          <Input placeholder="email" keyboardType='email-address' />
          <Input placeholder="senha" secureTextEntry={true}/>
          <Button title="Login"  />
        </LoginInputs>

        <CreateAccount>
          <ButtonCreateAccount title='Criar conta' ></ButtonCreateAccount>
        </CreateAccount> 
    </Container>
    
  );
}