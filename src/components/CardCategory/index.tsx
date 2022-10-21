import {Container, Text, Image} from '@components/CardCategory/styles';
import steak from '@assets/steak.png';


type Props = {
    title: string;
    image: string;
}

export function CardCategory({title, image}: Props){
    return(
        <Container>
            {image === 'STEAK' ? <Image resizeMode='contain' source={require('@assets/steak.png')}/> : null }
            <Text>{title}</Text>
             
        </Container>
    )
}