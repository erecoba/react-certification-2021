import React from 'react';
import { render, act } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Provider from '../../state/Provider';
import VideoDetail from './VideoDetail';
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

describe('Pages - Video detail', () => {
  let props;
  const theme = {
    base: '#f0f',
    background: '#fff',
    label: '#000',

    inputHoverBorder: '#f0f',
    inputHoverBg: '#ff0',

    colors: {
      white: '#fff',
    },
  };

  beforeEach(() => {
    props = {};
  });

  it('should render the component', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Provider>
              <VideoDetail {...props} />
            </Provider>
          </ThemeProvider>
        </BrowserRouter>
      );
    });

    let fragment;
    await act(async () => {
      fragment = wrapper.asFragment(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Provider>
              <VideoDetail {...props} />
            </Provider>
          </ThemeProvider>
        </BrowserRouter>
      );
    });

    expect(fragment).toMatchSnapshot();
  });
});
