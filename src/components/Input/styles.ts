import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  width: 100%;
  ${({theme}) => css`
        background-color: transparent;
        color:  ${theme.COLORS.GRAY_200 };
        font-family: ${theme.FONT_FAMILY.REGULAR };
        font-size: ${theme.FONT_SIZE.MD}px;
  `};

  border-bottom-width: 2px;
  border-bottom-color: #fff
`;