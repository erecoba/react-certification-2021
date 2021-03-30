import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Card from './Card';

jest.mock('../../state/actions/youtube');

describe('Avatar', () => {
  let props;
  let theme;

  beforeAll(() => {
    theme = {
      colors: {
        white: '#fff',
      },
    };
    props = {
      title: '',
      description: '',
      imgUrl: '',
      channelTitle: '',
      id: 'sG9rX6Ifzhw',
      isFluid: false,
    };
  });

  it('should render correctly inside button', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );

    expect(
      asFragment(
        <ThemeProvider theme={theme}>
          <Card {...props} />
        </ThemeProvider>
      )
    ).toMatchSnapshot();
  });

  it('should render the title', () => {
    props = { title: 'El título' };
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );

    expect(getByText('El título')).toBeTruthy();
  });

  it('should can be click to push a new url', () => {
    const wrapper = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Card {...props} />
        </ThemeProvider>
      </BrowserRouter>
    );

    const button = wrapper.getByLabelText('card-container');
    fireEvent.click(button);
  });

  it('should has the property width 100% while isFluid is true', () => {
    props.isFluid = true;
    const wrapper = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Card {...props} />
        </ThemeProvider>
      </BrowserRouter>
    );

    const button = wrapper.getByLabelText('card-container');
    expect(button).toHaveStyle('width: 100%');
  });
});
