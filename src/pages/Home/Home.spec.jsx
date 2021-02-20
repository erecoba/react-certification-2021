import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import Home from './Home.page';

describe('Avatar', () => {
  it('should render correctly inside button', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    expect(container.tagName).toMatchSnapshot('nav');
    expect(container.tagName).toMatchSnapshot('main');
  });
});
