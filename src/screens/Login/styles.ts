import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

export const LoginInputs = styled.View`
  flex: 4;
  align-items: center;
  justify-content: center;
`

export const CreateAccount = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`

export const Text = styled.Text`
    ${({theme}) => css `
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
        font-size: ${ theme.FONT_SIZE.XL}px;
    ` };
    padding-bottom: 150px;
`

export const TextCreateAccount = styled.Text`
    ${({theme}) => css `
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
        font-size: ${ theme.FONT_SIZE.LG}px;
    ` };
    padding-bottom: 20px;
`