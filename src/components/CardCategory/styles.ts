import styled, {css} from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
  
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const ContainerImage = styled.View`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD};
    ` }
`

export const ContainerText = styled.View`
    
`

export const Text = styled.Text`
    
`

export const Image = styled.Image`
    width: 50%;
    height: 50%;
`
