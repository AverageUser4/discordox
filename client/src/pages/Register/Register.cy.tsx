import { BrowserRouter as Router } from 'react-router-dom';
import { Component as Register } from './Register';

describe('<Register/>', () => {

  it('renders expected elements', () => {
    cy.mount(
      <Router>
        <Register/>
      </Router>
    );
    cy.get('[data-cy="RegisterForm"]');
    cy.get('[data-cy="RegisterAnchorAlreadyHaveAccount"]');
  });
  
});