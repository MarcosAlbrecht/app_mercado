import { Button } from '@components/Button';
import { ButtonCreateAccount } from '@components/ButtonCreateAccount';
import { Input } from '@components/Input';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addUser, CleanUser } from "@redux/actions/user";

import firestore from '@react-native-firebase/firestore';

import { UserFirestoreDTO } from 'src/DTOs/UserFirestoreDTO';

import { Container, CreateAccount, LoginInputs, Text } from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uid ,setUid] = useState('');
  const [user, setUser] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();


  function handleCreateAccount() {
    navigation.navigate('registerEmail');
  }

  async function handleSignIn() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe email e senha.');
    }

    setIsLoading(true);

    await auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('uid', result.user.uid) 
        //console.log(result.user) 
        setUid(result.user.uid);

        firestore()
        .collection<UserFirestoreDTO>('users')      
        .where('auth_id','==',result.user.uid )   
        .get()
        .then((querySnapshot) => {
            console.log('Total users: ', querySnapshot.size);

            if (querySnapshot.size === 0) {
              dispatch(CleanUser())   
            }else{

              querySnapshot.forEach(documentSnapshot => {
                console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                const user = documentSnapshot.data();
                console.log('user', user)

                dispatch(addUser(user))
              });
            }
        })
        .catch((err) => {
          console.log('erro ao bucar user', err)
        })

      })
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