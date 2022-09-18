import { render, screen } from '@testing-library/react-native';

import Description from './description';

describe('Description', function () {
  it('Renders as expected', function () {
    const expectedText = 'Lorem ipsum';

    render(<Description>{expectedText}</Description>);

    const text = screen.getByText(expectedText);

    expect(text).toHaveTextContent(expectedText);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
