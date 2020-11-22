import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import pen from 'assets/icons/pen.svg';
import Input from '../../components/atoms/Input/Input';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello World</h1>
        <h2>Witaj na stronie</h2>
        <Button>close / save</Button>
        <Button secondary>remove</Button>
        <Input placeholder="login" search />
        <ButtonIcon icon={pen} />
      </>
    </ThemeProvider>
  </>
);

export default Root;
