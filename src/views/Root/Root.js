import React from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Kasia</h1>
        <Button>close/save</Button>
        <Button secondary>remove</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
