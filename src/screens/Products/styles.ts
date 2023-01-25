import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    
    background-color: ${({theme}) => theme.COLORS.WHITE };
    flex-direction: row;
    
    border-radius: 10px;
`

export const DivImage = styled.View`
    flex: 1;
    width: 40% ;
    justify-content: center;
    
`
export const DivInfomartions = styled.View`
    width: 60% ;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    
`
export const DivTitle = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_300 };
    padding-bottom: 5px;
`

export const DivDescription= styled.View`
    
    padding-top: 10px;
`

export const Image = styled.Image`
    max-height: 200px;
    min-height: 150px;
`
export const TextTitle = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
    font-size: ${({theme}) => theme.FONT_SIZE.MD }px;
`

export const TextDescription = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR };
    font-size: ${({theme}) => theme.FONT_SIZE.SM }px;
`

export const DivButtons= styled.View`
    
    flex-direction: row; 
    justify-content: space-between;
    
    padding-bottom: 10px;
`

export const DivButtonAdd= styled.View`
    flex:1 ;

`
export const DivButtonsAddMinus= styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    
`

export const ButtonAdd = styled(TouchableOpacity)`
    margin-right: 20;
    min-height: 30px;
    max-height: 30px;

    
    margin-top: 10px;
    background-color: ${({theme}) => theme.COLORS.ORANGE};

    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const ButtonPlus= styled(TouchableOpacity)`
    margin-right: 5px;
    min-height: 30px;
    max-height: 30px;

    width: 30px;
    margin-top: 10px;
    background-color: ${({theme}) => theme.COLORS.ORANGE};

    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;
export const ButtonMinus= styled(TouchableOpacity)`
    margin-left: 5px;
    min-height: 30px;
    max-height: 30px;

    width: 30px;
    margin-top: 10px;
    background-color: ${({theme}) => theme.COLORS.ORANGE};

    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const TextQuantiry = styled.Text`
    margin-top: 5px;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.BLACK};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};     
`

export const TitleButton = styled.Text`
    text-align: center;
    align-items: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};     
`