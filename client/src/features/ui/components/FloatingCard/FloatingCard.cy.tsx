import { BrowserRouter as Router } from "react-router-dom";
import { FloatingCard } from "./FloatingCard";

describe('<FloatingCard/>', () => {

  it('renders with children', () => {
    cy.mount(
      <Router>
        <FloatingCard>hi</FloatingCard>
      </Router>
    );
    cy.get('[data-cy="FloatingCard"]').should('have.text', 'hi');
  });

  it('logo renders on small viewport', () => {
    cy.viewport(300, 500);
    cy.mount(
      <Router>
        <FloatingCard>hi</FloatingCard>
      </Router>
    );
    cy.get('[data-cy="Logo"]');
  });

  it('logo does not render on small viewport when hasLogo = false', () => {
    cy.viewport(300, 500);
    cy.mount(
      <Router>
        <FloatingCard hasLogo={false}>hi</FloatingCard>
      </Router>
    );
    cy.get('[data-cy="Logo"]').should('not.exist');
  });

  it('logo is hidden on big viewport', () => {
    cy.viewport(1000, 500);
    cy.mount(
      <Router>
        <FloatingCard>hi</FloatingCard>
      </Router>
    );
    cy.get('[data-cy="Logo"]').should('be.hidden');
  });

});