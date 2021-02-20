import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';
import SvgIcon from './SvgIcon';
import { SvgWrapper } from './SvgIcon.styled';

describe('SvgIcon', () => {
  it('should render correctly with svg', () => {
    const { container } = render(
      <SvgIcon>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );

    expect(container.tagName).toMatchSnapshot('svg');
  });

  it('should render with a color', () => {
    const { container } = render(
      <ThemeProvider theme={{ colors: { base: '#f0f' } }}>
        <SvgWrapper color="base" />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyleRule('fill', '#f0f');
  });
});
