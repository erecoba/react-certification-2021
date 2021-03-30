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

  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockReset();
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

    await retrieveVideosEffect({ search, dispatch, hideSearcher });

    expect(dispatch.mock.calls.length).toBe(0);
  });

  it('should execute youtubeGetVideos', async () => {
    const search = '';
    const hideSearcher = false;

    await retrieveVideosEffect({ search, dispatch, hideSearcher });

    expect(dispatch.mock.calls.length).toBe(0);
  });

  it('should do nothing while hideSearcher is true', async () => {
    const search = '';
    const hideSearcher = true;

    await retrieveVideosEffect({ search, dispatch, hideSearcher });

    expect(dispatch).toHaveBeenCalledTimes(0);
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
});
