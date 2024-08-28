import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const currentTheme = lightTheme;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
