import styled, {css} from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    height: 150px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
    justify-content: center
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.BLACK
}) )` 
    justify-content: center    
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.BLACK};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}; 
    text-align: center;
`