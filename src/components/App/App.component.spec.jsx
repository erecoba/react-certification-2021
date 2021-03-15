import React from 'react';
import { render, act } from '@testing-library/react';
import 'jest-styled-components';

import Provider from '../../state/Provider';
import App from './App.component';
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

describe('App', () => {
  it('should render correctly inside button', async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(
        <Provider>
          <App />
        </Provider>
      );
    });

    let fragment;
    await act(async () => {
      fragment = wrapper.asFragment(
        <Provider>
          <App />
        </Provider>
      );
    });

    expect(fragment).toMatchSnapshot();
  });
});
