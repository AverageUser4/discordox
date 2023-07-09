import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';

describe('<Header/>', () => {

  it('renders with Logo and link to login page', () => {
    cy.mount(
      <Router>
        <Header/>
      </Router>
    );
    cy.get('[data-cy="Header"]');
    cy.get('[data-cy="Logo"]');
    cy.get('[data-cy="HeaderAnchorLogin"]').should('have.attr', 'href', '/login');
  });
  
});