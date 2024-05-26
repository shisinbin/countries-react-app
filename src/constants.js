export const COLORS = {
  darkBlue: {
    elements: `hsl(209deg 23% 22%)`,
    background: `hsl(207deg 26% 17%)`,
    text: `hsl(200deg 15% 8%)`,
  },
  darkGray: {
    input: `hsl(0deg 0% 52%)`,
  },
  lightGray: {
    background: `hsl(0deg 0% 98%)`,
  },
  white: `hsl(0deg 0% 100%)`,
};

export const WEIGHTS = {
  light: 300,
  bold: 600,
  extrabold: 800,
};

export const BREAKPOINTS = {
  tabletMax: 1440,
  mobileMax: 550,
};

export const QUERIES = {
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  mobileAndSmaller: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
};
/*
    --dark-blue-elements: hsl(209, 23%, 22%)
    --dark-blue-background: hsl(207, 26%, 17%)
    --dark-blue-text: hsl(200, 15%, 8%)
    --dark-gray-input: hsl(0, 0%, 52%)
    --light-gray-background: hsl(0, 0%, 98%)
    --white: hsl(0, 0%, 100%)
*/
