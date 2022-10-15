import { Button } from '@components/Button';
import { Input } from '@components/Input';
import React from 'react';
import { Container,Text } from './styles';

export function Login() {
  return (
    <Container>
        <Text>MERCADO ESTRELA</Text>
        <Input placeholder="email" keyboardType='email-address' />
        <Input placeholder="senha" secureTextEntry={true}/>
        <Button title="Login"  />
    </Container>
  );
}