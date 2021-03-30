import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Provider from '../../state/Provider';
import Header, { retrieveVideosEffect } from './Header';
import MockVideosPopular from '../../mocks/videos-popular.json';
import MockVideosSearch from '../../mocks/videos-searching.json';
import MockVideosRelated from '../../mocks/videos-related.json';
import MockVideosDetail from '../../mocks/video-detail.json';

import { LabelCheckToggle, LabelCheckToggleFeat } from './Header.styled';

jest.mock('../../services', () => {
  return jest.fn(() => ({
    youtube: {
      getVideos: jest.fn(() => MockVideosPopular),
      searchVideos: jest.fn(() => MockVideosSearch),
      getRelatedVideos: jest.fn(() => MockVideosRelated),
      getStatistics: jest.fn(() => MockVideosDetail),
    },
  }));
});

describe('Component - Header', () => {
  let theme;
  let props;

  const youtubeDispatch = jest.fn();
  beforeEach(() => {
    youtubeDispatch.mockReset();
    theme = {
      colors: {
        white: '#fff',
      },
    };
    props = {
      hideSearcher: false,
    };
  });

  it('should render correctly inside button', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(
        <ThemeProvider theme={theme}>
          <Provider>
            <Header {...props} />
          </Provider>
        </ThemeProvider>
      );
    });

    let fragment;
    await act(async () => {
      fragment = wrapper.asFragment(
        <ThemeProvider theme={theme}>
          <Provider>
            <Header {...props} />
          </Provider>
        </ThemeProvider>
      );
    });

    expect(fragment).toMatchSnapshot();
  });

  it('should execute youtubeSearchVideos', async () => {
    const search = 'minecraft';
    const hideSearcher = false;

    await retrieveVideosEffect({ search, youtubeDispatch, hideSearcher });

    expect(youtubeDispatch.mock.calls.length).toBe(0);
  });

  it('should execute youtubeGetVideos', async () => {
    const search = '';
    const hideSearcher = false;

    await retrieveVideosEffect({ search, youtubeDispatch, hideSearcher });

    expect(youtubeDispatch.mock.calls.length).toBe(0);
  });

  it('should do nothing while hideSearcher is true', async () => {
    const search = '';
    const hideSearcher = true;

    await retrieveVideosEffect({ search, youtubeDispatch, hideSearcher });

    expect(youtubeDispatch).toHaveBeenCalledTimes(0);
  });

  it('should click on logo to go home', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Provider>
              <Header {...props} />
            </Provider>
          </ThemeProvider>
        </BrowserRouter>
      );
    });

    const logoHref = wrapper.getByLabelText('logo-container');
    fireEvent.click(logoHref);
  });

  it('should have background color dark', () => {
    const wrapper = render(<LabelCheckToggle data-testid="testing" checked />);

    expect(wrapper.getByTestId('testing')).toHaveStyleRule('background-color', '#3c4145');
  });

  it('should have background color light', () => {
    const wrapper = render(<LabelCheckToggle data-testid="testing" />);

    expect(wrapper.getByTestId('testing')).toHaveStyleRule('background-color', '#9ee3fb');
  });

  it('should have dark animation', () => {
    const wrapper = render(<LabelCheckToggleFeat data-testid="testing" checked />);

    expect(wrapper.getByTestId('testing')).toHaveStyleRule(
      'animation',
      'starry_star 5s ease-in-out infinite'
    );
  });

  it('should have light animation', () => {
    const wrapper = render(<LabelCheckToggleFeat data-testid="testing" />);

    expect(wrapper.getByTestId('testing')).toHaveStyleRule('animation', 'none');
  });
});
