import {Container, Text, Image} from '@components/CardCategory/styles';
import { useEffect, useState } from 'react';
import steak from '../../assets/steak.png';

export type CategoriesProps = {
    id: string;
    active: boolean;
    title: string;
}

type Props = {
    title: string;
}

export function CardCategory({title}: Props){
    const [imagem, setImagem] = useState();
    const images = [
        {
            title: "Açougue",
            image: require('@assets/steak.png')
        },
        {
            title: "Padaria",
            image: require('@assets/padaria.png')
        }
    ] 
    
    
    useEffect(() => {
        
        var pos = images.map(element => element.title).indexOf(title);
        if (pos >= 0) {
            setImagem(images[pos].image);    
        }
        
        console.log(pos) 
    //console.log(imagem)
    }, [])
    
    return(
        <Container>
           {imagem ? <Image resizeMode='contain' source={imagem}/> : null }
            <Text>{title}</Text>
             
        </Container>
    )
}