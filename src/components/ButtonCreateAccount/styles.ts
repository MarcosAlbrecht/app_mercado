import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    flex: 1;

    min-height: 40px;
    max-height: 40px;

    
    margin-top: 30px;
    background-color: transparent;

    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};     
`