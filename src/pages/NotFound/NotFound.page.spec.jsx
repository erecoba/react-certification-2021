import React from 'react';
import { act, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NotFoundPage from './NotFound.page';

describe('Pages - NotFoundPage', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('should render correctly NotFoundPage', async () => {
    let wrapper;

    await act(async () => {
      wrapper = render(
        <Router history={history}>
          <NotFoundPage />
        </Router>
      );
    });

    let fragment;
    await act(async () => {
      fragment = wrapper.asFragment(
        <Router history={history}>
          <NotFoundPage />
        </Router>
      );
    });

    expect(fragment).toMatchSnapshot();
  });
});
