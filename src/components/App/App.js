import React from 'react';
import { ThemeProvider } from 'styled-components';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Header from '../Header';
import MainContent from '../MainContent/MainContent';
import Spacer from '../Spacer';
import GlobalStyles from '../GlobalStyles';

import { useTheme } from '../../hooks/useTheme';

function App() {
  const { theme, themeToggler, currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <Header theme={theme} themeToggler={themeToggler} />
      <MaxWidthWrapper as='main'>
        <MainContent />
        <Spacer size={64} />
      </MaxWidthWrapper>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
