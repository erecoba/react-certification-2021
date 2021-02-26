import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import Input from './Input';

describe('Avatar', () => {
  it('should render correctly inside button', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    );

    expect(container.tagName).toMatchSnapshot('input');
  });
});
