import { Button } from '@components/Button';
import { ButtonCreateAccount } from '@components/ButtonCreateAccount';
import { Input } from '@components/Input';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, CreateAccount, LoginInputs, Text } from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();


  function handleCreateAccount() {
    navigation.navigate('registerEmail');
  }

  function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe email e senha.');
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

      })

    console.log(email);
    console.log(password);


  }

  return (

    <Container>
      <LoginInputs>
        <Text>MERCADO ESTRELA</Text>
        <Input placeholder="email" keyboardType='email-address' onChangeText={setEmail} />
        <Input placeholder="senha" secureTextEntry={true} onChangeText={setPassword} />
        <Button title="Login" onPress={handleSignIn} />
      </LoginInputs>

      <CreateAccount>
        <ButtonCreateAccount title='Criar conta' onPress={handleCreateAccount}></ButtonCreateAccount>
      </CreateAccount>
    </Container>

  );
}