import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import Avatar from './Avatar';

describe('Avatar', () => {
  it('should render correctly inside div', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Avatar />
      </ThemeProvider>
    );

    expect(container.tagName).toMatchSnapshot('div');
  });

  it('should render with pointer cursor while clickable', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Avatar clickable />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });
});
