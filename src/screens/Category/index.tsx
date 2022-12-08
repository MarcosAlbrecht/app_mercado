import { CardCategory, CategoriesProps } from '@components/CardCategory';
import { Header } from '@components/Header';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, ContainerBody, Text } from './styles';


import firestore from '@react-native-firebase/firestore';
import { Loading } from '@components/Loading';


// import { Container } from './styles';

export function Category(){
  const [isLoading, setIsLoading] = useState(true);

  const [categories, setCategories] = useState<CategoriesProps[]>([])

  useEffect(() => {
    setIsLoading(true)

    const categories = firestore()
    .collection('categories')
    .onSnapshot({
      error: (e) => console.log(e),
      next: (querySnapshot) => {
        const data = querySnapshot.docs.map(doc => {
          const { active, title} = doc.data(); 
          
          return{
            id: doc.id,
            active,
            title,      
            
          }
        }) 
        
        setCategories(data);
        setIsLoading(false);
      }
      

      
    });
    
    
  }, [])

  return (
    <Container>
        
        <ContainerBody>
         
          {isLoading ? <Loading/> :
          <FlatList  
            data={categories}
            keyExtractor={item => item.title}
            renderItem={
              ({item}) => (
                <CardCategory title={item.title} />
              )
            }
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    categories.length === 0 && {flex: 1}
                ]}
          />
          }
        </ContainerBody>
        
    </Container>
  );
}

export default Category;
