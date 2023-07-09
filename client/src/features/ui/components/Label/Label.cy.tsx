import { Label } from './Label'

describe('<Label />', () => {

  it('renders with appropriate text content and classes', () => {
    cy.mount(<Label>hello</Label>);
    cy.get('[data-cy="Label"]').should('have.text', 'hello');
    cy.get('[data-cy="Label"]').should('have.class', 'label');
    cy.get('[data-cy="Label"]').should('have.class', 'label--kind-0');
    cy.get('[data-cy="Label"]').should('have.class', 'label--color-0');
  });

  it('has custom classes alongside default classes', () => {
    cy.mount(<Label className="one two">hello</Label>);
    cy.get('[data-cy="Label"]').should('have.class', 'label');
    cy.get('[data-cy="Label"]').should('have.class', 'label--kind-0');
    cy.get('[data-cy="Label"]').should('have.class', 'label--color-0');
    cy.get('[data-cy="Label"]').should('have.class', 'one');
    cy.get('[data-cy="Label"]').should('have.class', 'two');
  });

  it('colorScheme prop changes color class', () => {
    cy.mount(<Label colorScheme={1}>hello</Label>);
    cy.get('[data-cy="Label"]').should('have.class', 'label--color-1');
  });

  it('kind prop changes kind class', () => {
    cy.mount(<Label kind={1}>hello</Label>);
    cy.get('[data-cy="Label"]').should('have.class', 'label--kind-1');
  });

  it('look prop changes classes', () => {
    cy.mount(<Label look="link">hello</Label>);
    cy.get('[data-cy="Label"]').should('have.class', 'link');
    cy.get('[data-cy="Label"]').should('have.class', 'link--kind-0');
    cy.get('[data-cy="Label"]').should('have.class', 'link--color-0');
  });

  it('respects style prop', () => {
    cy.mount(<Label style={{ fontSize: 123 }}>hi</Label>);
    cy.get('[data-cy="Label"]').should('have.css', 'fontSize', '123px');
  });

});