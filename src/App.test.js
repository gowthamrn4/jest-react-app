import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('list item', () => {
  render(<App />);
  const listItem = screen.getAllByRole("listitem");
  expect(listItem.length).toEqual(3);
});

