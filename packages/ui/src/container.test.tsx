import { render, screen } from '@testing-library/react-native';

import Container from './container';

describe('Container', function () {
  it('Renders as expected', async function () {
    const testId = 'test-id';

    render(<Container testID={testId} />);

    const xxx = await screen.findByTestId(testId);

    expect(xxx).toBeDefined();

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
