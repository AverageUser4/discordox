import { BrowserRouter as Router } from 'react-router-dom';
import { Logo } from './Logo';

describe('<Logo/>', () => {

  it('renders', () => {
    cy.mount(
      <Router>
        <Logo/>
      </Router>
    );
    cy.get('[data-cy="Logo"]');
  });

  it('adds provided classes to element', () => {
    cy.mount(
      <Router>
        <Logo className="one two"/>
      </Router>
    );
    cy.get('[data-cy="Logo"]').should('have.class', 'one');
    cy.get('[data-cy="Logo"]').should('have.class', 'two');
  });
  
  it('is link pointing to root', () => {
    cy.mount(
      <Router>
        <Logo/>
      </Router>
    );
    cy.get('[data-cy="Logo"]').should('have.attr', 'href', '/');
  });
  
});