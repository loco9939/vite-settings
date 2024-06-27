import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import App from './App';

React;

const context = describe;
describe('App', () => {
  it('3 + 5 should be 8', () => {
    expect(3 + 5).toBe(8);
  });

  context('Dom Testing', () => {
    it('renders App', () => {
      render(<App />);

      expect(screen.getByText(/App/)).toBeInTheDocument();
    });
  });

  context('MSW Testing', () => {
    it('renders firstName', async () => {
      render(<App />);

      await waitFor(() => {
        const firstName = screen.getByText(/John/);
        expect(firstName);
      });
    });
  });

  context('Zustand Testing', () => {
    beforeEach(() => {
      render(<App />);
    });

    it('should render with initial state of 0', async () => {
      expect(await screen.findByText(/0/)).toBeInTheDocument();

      const incBtn = await screen.findByRole('button', { name: /increase/i });

      expect(incBtn).toBeInTheDocument();
    });

    it('should increase count by clicking a button', async () => {
      expect(await screen.findByText(/0/)).toBeInTheDocument();

      const incBtn = await screen.findByRole('button', { name: /increase/i });

      fireEvent.click(incBtn);

      expect(await screen.findByText(/1/)).toBeInTheDocument();
    });
  });
});
