import { render, screen } from '@testing-library/react-native';
import * as React from 'react';

import { App } from './app';

describe('Application', function () {
  it('Renders as expected', function () {
    const expectedText = 'Lorem ipsum';

    render(<App />);

    const text = screen.getByText(expectedText);

    expect(text).toHaveTextContent(expectedText);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
