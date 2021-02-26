import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import Header from './Header';

describe('Avatar', () => {
  it('should render correctly inside button', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(getByText('Wizevideo')).toMatchSnapshot('button');
  });
});
