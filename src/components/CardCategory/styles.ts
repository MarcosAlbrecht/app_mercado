import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    width: 49%;
    
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 40px;
    
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.BLACK};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
    ` } 
    padding-bottom: 20px   
`

export const Image = styled.Image`
    height: 130px;
    
`
