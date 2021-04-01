const colors = {
  base: '#d94c4b',
  gray1: '#efefef',
  white: '#ffffff',
  black: '#000000',
};

const theme = {
  light: {
    base: colors.base,
    background: '#fff',
    label: '#000',
    bodyBackground: `linear-gradient(
      120deg,
      #eea2a2 0,
      #bbc1bf 19%,
      #57c6e1 42%,
      #b49fda 79%,
      #7ac5d8 100%
    )`,

    inputHoverBorder: colors.base,
    inputHoverBg: colors.gray1,
    blurBackground: '#cdecf578',
    error: '#f00',

    colors,
  },
  dark: {
    base: colors.base,
    background: '#2d2d2d',
    label: '#fff',
    bodyBackground: `linear-gradient(
      120deg,
      #c08282 0,
      #929796 19%,
      #367c8d 42%,
      #665a7e 79%,
      #4e7f8b 100%
    )`,

    inputHoverBorder: colors.base,
    inputHoverBg: colors.gray1,
    blurBackground: '#3d474a78',
    error: '#f00',

    colors,
  },
};

export default theme;
