import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello World</h1>
    <h2>Witaj na stronie</h2>
    <Button>close / save</Button>
    <Button secondary>remove</Button>
  </>
);

export default Root;
