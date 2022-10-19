import { Header } from '@components/Header';
import React from 'react';
import { Container, ContainerHead, ContainerBody, Text } from './styles';

// import { Container } from './styles';

export function Category(){
  return (
    <Container>
        <Header title='Categorias' showBackButton={false}></Header>
        <ContainerBody>
          <Text>TEXTO CATEGORIA</Text>
        </ContainerBody>
        
    </Container>
  );
}

export default Category;
