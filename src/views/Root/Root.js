import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Kasia</h1>
    <Button>close/save</Button>
    <Button secondary>remove</Button>
  </div>
);

export default Root;
