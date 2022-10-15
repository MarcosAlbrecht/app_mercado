import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Text = styled.Text`
    ${({theme}) => css `
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.WHITE};
        font-size: ${ theme.FONT_SIZE.XL}px;
    ` };
    padding-bottom: 100px;
`