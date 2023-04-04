import { render, screen } from '@testing-library/react';

import Day-one from './Day-one';

test('renders learn react link', () => {
  render(<Day-one />);
  <h1>hello</h1>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
