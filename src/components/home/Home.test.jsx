import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './Home';



describe ('home page test', () => {
  it('Hom container', async() => {
    render(
      <Router>
        <Home />
      </Router>
    );
    screen.getByText('Loading');

    const ul = await screen.findByTestId('items');
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
