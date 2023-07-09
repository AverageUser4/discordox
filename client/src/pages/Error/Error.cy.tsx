import { BrowserRouter as Router } from 'react-router-dom';
import { Component as Error } from './Error';

describe('<Error/>', () => {

  it('renders expected elements', () => {
    cy.mount(
      <Router>
        <Error/>
      </Router>
    );
    cy.get('[data-cy="Error"]');
  });
  
});