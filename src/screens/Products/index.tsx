import React, { useState } from "react";
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
    const [quantity, setQuantity] = useState(1);

    function handleAddQuantity(){
        setQuantity(quantity+1)    
    }

    function handleMinusQuantity(){
        if(quantity > 1){
            setQuantity(quantity-1)
        }    
    }

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
                        <ButtonPlus onPress={handleAddQuantity}><TitleButton>+</TitleButton>
                        </ButtonPlus>
                            <TextQuantiry>{ quantity }</TextQuantiry>
                        <ButtonMinus onPress={handleMinusQuantity}>
                            <TitleButton>-</TitleButton>
                        </ButtonMinus>
                    </DivButtonsAddMinus>
                </DivButtons>
                
            </DivInfomartions>

        </Container>
    )
}
