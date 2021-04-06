import React from 'react';
import { render, act } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import FavoriteDetailPage from './FavoriteDetail';

import Provider from '../../state/Provider';

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

describe('Pages - Favorite', () => {
  let theme;
  let props;
  let history;

  const youtubeDispatch = jest.fn();
  beforeEach(() => {
    youtubeDispatch.mockReset();
    history = createMemoryHistory();
    theme = {
      colors: {
        white: '#fff',
      },
    };
    props = {};
  });

  it('should render Favorite page correctly', async () => {
    let wrapper;

    await act(async () => {
      wrapper = render(
        <ThemeProvider theme={theme}>
          <Provider>
            <Router history={history}>
              <FavoriteDetailPage {...props} />
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
              <FavoriteDetailPage {...props} />
            </Router>
          </Provider>
        </ThemeProvider>
      );
    });

    expect(fragment).toMatchSnapshot();
  });
});
