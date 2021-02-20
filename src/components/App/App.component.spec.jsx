import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import App from './App.component';

describe('Avatar', () => {
  it('should render correctly inside button', () => {
    const { getByText } = render(<App />);

    expect(getByText('Wizevideo')).toBeTruthy();
  });
});
