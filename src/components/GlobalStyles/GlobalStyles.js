import { createGlobalStyle } from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';

const GlobalStyles = createGlobalStyle`
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }

  /*
    3. Allow percentage-based heights in the application
  */
  html, body, #root {
    height: 100%;
  }

  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Nunito Sans', sans-serif;
  }

  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }

  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /*
    9. Create a root stacking context
  */
  #root {
    isolation: isolate;
  }

  /*
    Remove default button styles. We'll provide our own at the
    component level
  */
  button {
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: inherit;
  }

  input {
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Design Tokens */
  html {
    --dark-blue-elements: ${COLORS.darkBlue.elements};
    --dark-blue-background: ${COLORS.darkBlue.background};
    --dark-blue-text: ${COLORS.darkBlue.text};
    --dark-gray-input: ${COLORS.darkGray.input};
    --light-gray-background: ${COLORS.lightGray.background};
    --white: ${COLORS.white};

    --font-weight-light: ${WEIGHTS.light};
    --font-weight-bold: ${WEIGHTS.bold};
    --font-weight-extrabold: ${WEIGHTS.extrabold};

    --shadow-light: 0deg 0% 88%;
    --shadow-dark: 207deg 20% 12%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};

    --shadow-color: ${({ theme }) => theme.shadow};
  }
`;

export default GlobalStyles;
