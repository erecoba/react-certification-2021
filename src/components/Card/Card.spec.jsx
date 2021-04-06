import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Provider from '../../state/Provider';

import Card from './Card';

jest.mock('../../state/actions/youtube');

describe('Avatar', () => {
  let props;
  let theme;
  window.alert = jest.fn();

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

  it('should add a new video to favorite', () => {
    props.canFavorite = true;
    const wrapper = render(
      <BrowserRouter>
        <Provider>
          <ThemeProvider theme={theme}>
            <Card {...props} />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    );

    const cardWrapper = wrapper.getByLabelText('card-wrapper');
    fireEvent.mouseEnter(cardWrapper);

    const favButton = wrapper.getByLabelText('favorite-button');
    fireEvent.click(favButton);
  });
});
