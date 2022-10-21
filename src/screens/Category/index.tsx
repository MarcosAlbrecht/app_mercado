import { CardCategory } from '@components/CardCategory';
import { Header } from '@components/Header';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, ContainerBody, Text } from './styles';

// import { Container } from './styles';

export function Category(){
  const [categorys, setCategosrys] = useState([
    {"image":"STEAK", "title":"Açougue"},
    {"image":"STEAK", "title":"Padaria"}, 
    {"image":"STEAK", "title":"Frios"},
    {"image":"STEAK", "title":"Abc"},
    {"image":"STEAK", "title":"aasd"},
    {"image":"STEAK", "title":"A33asbc"},
    {"image":"STEAK", "title":"asfc"},
    {"image":"STEAK", "title":"56745"},

  ])

  return (
    <Container>
        
        <ContainerBody>
          {/* <CardCategory image='STEAK' title='Açougue' /> */}
          <FlatList  
            data={categorys}
            keyExtractor={item => item.title}
            renderItem={
              ({item}) => (
                <CardCategory title={item.title} image={item.image} />
              )
            }
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    categorys.length === 0 && {flex: 1}
                ]}
          />
        </ContainerBody>
        
    </Container>
  );
}

export default Category;
