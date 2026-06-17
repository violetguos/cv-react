import { render, screen } from '@testing-library/react';
import App from './App';

test('renders magic button', () => {
  render(<App />);
  const button = screen.getByText(/magic/i);
  expect(button).toBeInTheDocument();
});
