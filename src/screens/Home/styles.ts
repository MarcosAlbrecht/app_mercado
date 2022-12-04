import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE };
  
`;

export const ContainerBody = styled.View`
    flex: 1;
    
    background-color: ${({theme}) => theme.COLORS.BLUE };

    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    margin-top: 30px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`

export const Text = styled.Text`
    color: #fff;
`