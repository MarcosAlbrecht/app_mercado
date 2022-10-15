import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.COLORS.BLUE};;
  flex: 1;
  align-items: center;
  justify-content: center;
  
`;

export const Text = styled.Text`
    color: #fff;
`