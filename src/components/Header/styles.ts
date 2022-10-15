import styled, {css} from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;    
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.WHITE
}) )`   
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};  
`