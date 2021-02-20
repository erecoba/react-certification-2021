import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import Card from './Card';

describe('Avatar', () => {
  let props;
  beforeAll(() => {
    props = {
      title: '',
      description: '',
      imgUrl: '',
      channelTitle: '',
    };
  });

  it('should render correctly inside button', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );

    expect(container.tagName).toMatchSnapshot('button');
  });

  it('should render the title', () => {
    const theme = {
      colors: {
        white: '#fff',
      },
    };
    props = { title: 'El título' };
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );

    expect(getByText('El título')).toBeTruthy();
  });
});
