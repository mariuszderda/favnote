import React from 'react';

import GlobalStyle from '../src/theme/GlobalStyle';
import { withThemesProvider } from 'themeprovider-storybook';
import { theme } from '../src/theme/mainTheme';

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
  withThemesProvider([theme]),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
