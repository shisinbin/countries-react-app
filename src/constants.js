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

export const ELEVATIONS = {
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `,
};
/*
    --dark-blue-elements: hsl(209, 23%, 22%)
    --dark-blue-background: hsl(207, 26%, 17%)
    --dark-blue-text: hsl(200, 15%, 8%)
    --dark-gray-input: hsl(0, 0%, 52%)
    --light-gray-background: hsl(0, 0%, 98%)
    --white: hsl(0, 0%, 100%)
*/
