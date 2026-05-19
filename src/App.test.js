import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { level: 1, name: /richard kwaku opoku/i });
  expect(linkElement).toBeInTheDocument();
});
