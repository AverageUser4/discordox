import { BrowserRouter as Router } from 'react-router-dom';
import { Anchor } from './Anchor'

describe('<Anchor />', () => {

  it('renders with appropriate text content and classes', () => {
    cy.mount(
      <Router>
        <Anchor href="/">hello</Anchor>
      </Router>
    );
    cy.get('[data-cy="Anchor"]').should('have.text', 'hello');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--kind-0');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--color-0');
  });

  it('has custom classes alongside default classes', () => {
    cy.mount(
      <Router>
        <Anchor href="/" className="one two">hello</Anchor>
      </Router>
    );
    cy.get('[data-cy="Anchor"]').should('have.class', 'link');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--kind-0');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--color-0');
    cy.get('[data-cy="Anchor"]').should('have.class', 'one');
    cy.get('[data-cy="Anchor"]').should('have.class', 'two');
  });

  it('colorScheme prop changes color class', () => {
    cy.mount(
      <Router>
        <Anchor href="/" colorScheme={1}>hello</Anchor>
      </Router>
    );
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--color-1');
  });

  it('kind prop changes kind class', () => {
    cy.mount(
      <Router>
        <Anchor href="/" kind={1}>hello</Anchor>
      </Router>
    );
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--kind-1');
  });

  it('look prop changes classes', () => {
    cy.mount(
      <Router>
        <Anchor href="/" look="button">hello</Anchor>
      </Router>
    );
    cy.get('[data-cy="Anchor"]').should('have.class', 'button');
    cy.get('[data-cy="Anchor"]').should('have.class', 'button--kind-0');
    cy.get('[data-cy="Anchor"]').should('have.class', 'button--color-0');
  });

  it('has appropriate href attribute', () => {
    cy.mount(
      <Router>
        <Anchor href="/about">hello</Anchor>
      </Router>
    );
    cy.get('[data-cy="Anchor"]').should('have.attr', 'href', '/about');
  });

  it('when isPlainAnchorTag = true, it renders normal <a> tag (instead of react-router link) with all expected attributes', () => {
    /* react router Link would crash without Router */
    cy.mount(
      <Anchor href="/" isPlainAnchorTag={true} style={{ fontSize: 123 }}>hello</Anchor>
    );
    cy.get('[data-cy="Anchor"]').should('have.attr', 'href', '/');
    cy.get('[data-cy="Anchor"]').should('have.text', 'hello');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--kind-0');
    cy.get('[data-cy="Anchor"]').should('have.class', 'link--color-0');
    cy.get('[data-cy="Anchor"]').should('have.css', 'font-size', '123px');
  });

  it('respects style prop', () => {
    cy.mount(
      <Router>
        <Anchor href="/" style={{ fontSize: 123 }}>hi</Anchor>
      </Router>
    );
    cy.get('[data-cy="Anchor"]').should('have.css', 'font-size', '123px');
  });

});