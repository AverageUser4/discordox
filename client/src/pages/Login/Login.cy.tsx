import { BrowserRouter as Router } from 'react-router-dom';
import { Component as Login } from './Login';

describe('<Login/>', () => {

  it('renders expected elements', () => {
    cy.mount(
      <Router>
        <Login/>
      </Router>
    );
    cy.get('[data-cy="LoginForm"]');
    cy.get('[data-cy="LoginAnchorRegister"]');
  });
  
});