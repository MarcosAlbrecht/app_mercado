
import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, LoginInputs, Text } from "./styles";
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Loading } from "@components/Loading";

import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { addUser } from "@redux/actions/user";

import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type RouteParams = {
    email: string;
    password: string;
  }

export function RegisterUserAddress() {
    const route = useRoute();
    const { email, password } = route.params as RouteParams;
    const [ cep, setCep ] = useState('');
    const [ city, setCity ] = useState('');
    const [ district, setDistrict ] = useState('');
    const [ street, setStreeet ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ uid, setUid ] = useState('');
    
    const[isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const user = {
        email : email,
        cep: cep,
        city : city,
        district : district,
        street : street,
        number : number,
        auth_id: uid,
        created_at: firestore.FieldValue.serverTimestamp()     
    }

    function handleCreateUser(){
        setIsLoading(true)

        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user.uid);
            setUid(res.user.uid);
            firestore()
            .collection('users')
            .add({
                email,
                cep,
                city,
                district,
                street,
                number,
                user_type: "client",
                active: true,
                auth_id: res.user.uid,
                created_at: firestore.FieldValue.serverTimestamp(),
                updatet_at: ""    
            })
            .then((result) => {
                //console.log('Usuario criado com sucesso', result); 
                dispatch(addUser({
                    email,
                    cep,
                    city,
                    district,
                    street,
                    number,
                    user_type: "client",
                    active: true,
                    auth_id: res.user.uid,
                    created_at: new Date().toDateString(),
                    updatet_at: "", 
                }));   
            })
            .catch((err) => {
                console.log('Erro ao inserir dados do usuario', err);
            })



            setIsLoading(false) 
            //dispatch(addUser())  
        })
        .catch((error) => {
            console.log('erro ao criar user', error.message)
            if (error.message === '[auth/invalid-email] The email address is badly formatted.' ) {
                Alert.alert('Erro ao cadastrar','Email inválido');
            }else if(error.message === '[auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]') {
                Alert.alert('Erro ao cadastrar','A senha deve conter no mínimo 6 caracteres');    
            } 
            else{
                Alert.alert('Erro ao cadastrar','Tente novamente mais tarde');    
            }
            
            setIsLoading(false) 
        })
    }

    if (isLoading) {
        return <Loading />    
    }

    return(
        <Container>
            <LoginInputs>
                <Input placeholder="cep" keyboardType='numeric' onChangeText={setCep} />
                <Input placeholder="cidade" keyboardType='default' onChangeText={setCity} />
                <Input placeholder="bairro" keyboardType='default' onChangeText={setDistrict} />
                <Input placeholder="rua" keyboardType='default' onChangeText={setStreeet} />
                <Input placeholder="número" keyboardType='numeric' onChangeText={setNumber} />
                <Button title="Criar conta"  onPress={handleCreateUser}/>
            </LoginInputs>
            {/* <Text>TELA DE DADOS</Text>
            <Text>{email}</Text>
            <Text>{password}</Text> */}
        </Container>
    )
}    