import React from 'react';
import { act, render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Provider from '../../state/Provider';
import Home from './Home.page';

import MockVideosPopular from '../../mocks/videos-popular.json';
import MockVideosSearch from '../../mocks/videos-searching.json';
import MockVideosRelated from '../../mocks/videos-related.json';
import MockVideosDetail from '../../mocks/video-detail.json';

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

describe('Home Page', () => {
  let theme;
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    theme = {
      base: '#f0f',
      background: '#fff',
      label: '#000',

      inputHoverBorder: '#f0f',
      inputHoverBg: '#ff0',

      colors: {
        white: '#fff',
      },
    };
  });

  it('should render correctly Home', async () => {
    let wrapper;

    await act(async () => {
      wrapper = render(
        <ThemeProvider theme={theme}>
          <Provider>
            <Router history={history}>
              <Home />
            </Router>
          </Provider>
        </ThemeProvider>
      );
    });

    let fragment;
    await act(async () => {
      fragment = wrapper.asFragment(
        <ThemeProvider>
          <Provider>
            <Router history={history}>
              <Home />
            </Router>
          </Provider>
        </ThemeProvider>
      );
    });

    expect(fragment).toMatchSnapshot();
  });
});
