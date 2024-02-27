import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './themes/default';
import { GlobalStyle } from './global';
import { ReactNode } from 'react';

export function renderTheme (children: ReactNode) {
  return (
    <ThemeProvider theme={defaultTheme}>
        {children}
        <GlobalStyle />
    </ThemeProvider>
  )
};
