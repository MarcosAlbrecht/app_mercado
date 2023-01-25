import React from "react";
import { Container, 
    DivImage, 
    DivInfomartions, 
    Image, 
    TextTitle, 
    TextDescription, 
    DivDescription, 
    DivTitle, 
    DivButtons, 
    ButtonAdd,
    TitleButton,
    ButtonPlus,
    ButtonMinus,
    TextQuantiry,
    DivButtonAdd,
    DivButtonsAddMinus
 } from "./styles";
import { TouchableOpacityProps } from 'react-native';


export function Products(){
    return(
        <Container>
            <DivImage>
                
                <Image resizeMode="contain" source={{uri: 'https://firebasestorage.googleapis.com/v0/b/mercado-app-cf8aa.appspot.com/o/Arroz-Tio-Joao-Branco-1kg.png?alt=media&token=c0b762ac-5926-428a-b4bd-42e1d0ea8909'}}/>
            </DivImage>
            <DivInfomartions>
                <DivTitle>
                    <TextTitle>Dados</TextTitle>
                </DivTitle>
                <DivDescription>
                    <TextDescription>Integral tipo 1  longo fino Subgrupo parboilizado Integral</TextDescription>
                </DivDescription>
                
                <DivButtons>
                    <DivButtonAdd>
                        <ButtonAdd>
                            <TitleButton>Adicionar</TitleButton>
                        </ButtonAdd>
                    </DivButtonAdd>

                    <DivButtonsAddMinus>
                        <ButtonPlus><TitleButton>+</TitleButton>
                        </ButtonPlus>

                        <TextQuantiry>1</TextQuantiry>

                        <ButtonMinus>
                            <TitleButton>-</TitleButton>
                        </ButtonMinus>
                    </DivButtonsAddMinus>
                </DivButtons>
                
            </DivInfomartions>

        </Container>
    )
}
