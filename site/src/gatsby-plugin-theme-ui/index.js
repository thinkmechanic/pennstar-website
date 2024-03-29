import { merge } from 'lodash'
import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/'

export default merge({}, baseTheme, {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#63B3ED',
    highlight: 'black',
    secondary: '#718096',
    base: '#fbf9fa',
    alphaShade: 'linear-gradient(180deg, rgba(185,185,185,1) 10%, rgba(255,255,255,0.258140756302521) 67%)'
  },
  sizes: {
    ...baseTheme.sizes,
  },
  fonts: {
    ...baseTheme.fonts,
    brand: `"Alegreya", Serif`,
    secondary: `"Questrial", Sans-Serif`,
    default: `"Permanent Marker", Cursive`
  },
  fontSizes: {
    ...baseTheme.fontSizes,
    sm: '0.65em',
    md: '0.85em'
  },
  shadows: {
    ...baseTheme.shadows,
    new: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)',
    neu: `20px 20px 60px #d5d4d5,
    -20px -20px 60px #ffffff`,
    neuDark: `10px 10px 20px #e9e8e9,
    -10px -10px 20px #ffffff`,
    neuSm: `2px 2px 8px #f1eff0,
    -2px -2px 8px #ffffff;`,
    neuGray: `7px 7px 14px #7b7c7d,
    -7px -7px 14px #858687`,
    insetLight: 'inset 0 0 0 1000px rgba(255,255,255,.2)',
    insetDark: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
    headerShadow: '-2px 5px 5px rgba(87, 87, 87, 0.08)',
    textShadowLight: '-2px 0px 4px rgba(178, 178, 178, 0.25)',
    textShadowDark: '1px 1px 1px rgba(0, 0, 0, 0.25)',
    outlineXl: '0 0 0 6px rgba(66, 153, 225, 0.5)',

  },
  borders: {
    ...baseTheme.borders,
    test: '1px solid yellow',
    default: '1px solid purple',
  },
  styles: {
    ...baseTheme.styles,
    Layout: {
      color: 'text',
      fontFamily: 'sans',
      fontSize: 1,
      lineHeight: 'body',
      display: 'flex',
      maxWidth: 'screenWidth',
      width: 'screeWidth',
      minHeight: 'screenHeight',
    },
    Main: {
      mx: 'auto',
      width: 'full',
      minHeight: '6em',
      flex: '1 1 auto',
    },
    a: {
      borderBottom: 'none',
      "&.hover": {
        textDecoration: 'none'
      },
    },
  },
})
