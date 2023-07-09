import { BrowserRouter as Router } from 'react-router-dom';
import { Component as Root } from './Root';

describe('<Root/>', () => {

  it('renders expected elements', () => {
    cy.mount(
      <Router>
        <Root/>
      </Router>
    );
    cy.get('[data-cy="Header"]');
    cy.get('[data-cy="ArtworkContainer"]');
    cy.get('[data-cy="RootCenteredBlockText"]');
    cy.get('[data-cy="OpenInBrowser"]');
  });
  
});