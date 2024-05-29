export const lightTheme = {
  background: 'var(--light-gray-background)',
  elements: 'var(--white)',
  text: 'var(--dark-blue-text)',
  shadow: 'var(--shadow-light)',
  placeholderText: 'var(--dark-gray-input)',
  loaderTrack: 'hsl(0deg 0% 35%)',
  loaderFill: 'hsl(--dark-blue-background)',
};

export const darkTheme = {
  background: 'var(--dark-blue-background)',
  elements: 'var(--dark-blue-elements)',
  text: 'var(--white)',
  shadow: 'var(--shadow-dark)',
  placeholderText: 'hsl(0deg 0% 90%)',
  loaderTrack: 'hsl(0deg 0% 90%)',
  loaderFill: 'var(--white)',
};

/*

    --shadow-light: 0deg 0% 88%;
    --shadow-dark: 207deg 20% 12%;

Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

    --dark-blue-elements: ${COLORS.darkBlue.elements};
    --dark-blue-background: ${COLORS.darkBlue.background};
    --dark-blue-text: ${COLORS.darkBlue.text};
    --dark-gray-input: ${COLORS.darkGray.input};
    --light-gray-background: ${COLORS.lightGray.background};
    --white: ${COLORS.white};

    --font-weight-light: ${WEIGHTS.light};
    --font-weight-bold: ${WEIGHTS.bold};
    --font-weight-extrabold: ${WEIGHTS.extrabold};

*/
