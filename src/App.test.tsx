import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

React;

describe('test code', () => {
  it('3 + 5 should be 8', () => {
    expect(3 + 5).toBe(8);
  });

  it('renders App', () => {
    render(<App />);

    expect(screen.getByText(/App/)).toBeInTheDocument();
  });
});
