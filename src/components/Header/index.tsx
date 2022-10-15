import { Container, Title, BackIcon, BackButton } from "./styles";

//import { useNavigation } from '@react-navigation/native';

type Props = {
    showBackButton?: boolean;
    title: string;
}

export function Header({ showBackButton = false, title }: Props){
    

    return(
        <Container>
            { 
            showBackButton &&
            <BackButton >
                <BackIcon />
            </BackButton>
            }
            <Title>{title}</Title>
        </Container>
    )
}