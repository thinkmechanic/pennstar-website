import { merge } from 'lodash'
import { theme as baseTheme } from 'gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/'

export default merge({}, baseTheme, {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#2b6cb0',
    highlight: '#2b6cb0',
    secondary: '#718096',
    base: '#fbf9fa',
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
    neu: `26px 26px 52px #cfdfe9,
    - 26px - 26px 52px #e1f1fd`
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
      border: 'default',
      // overflowX: 'hidden',
    },
    Header: {
      // backgroundColor: 'white',
      // // color: 'text',
      // fontWeight: 'bold',
      // margin: '0 auto',
      // width: 'screenWidth',
      // padding: [0, 0, 0, 3],
      // flexShrink: 0,
      // display: 'flex',
      // justifyContent: 'space-evenly',
      // alignItems: 'center',
      // fontFamily: 'body',
      // boxShadow: 'md',
    },
    Main: {
      mx: 'auto',
      width: 'full',
      minHeight: '6em',
      flex: '1 1 auto',
      border: 'default'
    },
    Footer: {
      // width: 'screenWidth',
      // padding: 3,
      // backgroundColor: 'primary',
      // color: 'text',
    },
    a: {
      borderBottom: 'none',
      "&.hover": {
        textDecoration: 'none'
      },
    },
  },
  variants: {
    card: {
      fontSize: [1, 2, 3],
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 0,
      padding: [1, 3],
    },
    cardInner: {
      borderRadius: 'lg',
      boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)'
    },
    fullWidth: {
      width: 'screenWidth',
      right: '30%',
    },
  }
})
