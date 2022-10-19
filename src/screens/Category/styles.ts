import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;

`

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE };
`

export const ContainerHead = styled.View`
    height: 20%;
    background-color: ${({theme}) => theme.COLORS.WHITE };
`

export const ContainerBody = styled.View`
    height: 80%;
    background-color: ${({theme}) => theme.COLORS.BLUE };
`