import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Immortal Duo website', () => {
  render(<App />);
  // Just check that the app renders without crashing
  expect(document.body).toBeInTheDocument();
});
