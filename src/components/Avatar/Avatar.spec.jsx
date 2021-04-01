import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Avatar from './Avatar';

describe('Avatar', () => {
  let history;
  beforeEach(() => {
    history = createMemoryHistory();
  });
  it('should render correctly inside div', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Avatar />
        </Router>
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
        <Router history={history}>
          <Avatar clickable />
        </Router>
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });
});
