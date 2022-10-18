import {Container, Text, Image} from '@components/CardCategory/styles';
import steak from '@assets/steak.png';


type Props = {
    titulo: string;
    image: string;
}

export function CardCategory({titulo, image}: Props){
    return(
        <Container>
            {image === 'STEAK' ? <Image source={require('@assets/steak.png')}/> : null }
             
        </Container>
    )
}