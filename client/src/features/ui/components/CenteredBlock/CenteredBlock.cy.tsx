import { CenteredBlock } from './CenteredBlock';

describe('<CenteredBlock/>', () => {

  it('renders with children', () => {
    cy.mount(<CenteredBlock>hi</CenteredBlock>);
    cy.get('[data-cy="CenteredBlock"]').should('have.text', 'hi');
  });
  
  it('respects marginTop prop', () => {
    cy.mount(<CenteredBlock marginTop={200}>hi</CenteredBlock>);
    cy.get('[data-cy="CenteredBlock"]').should('have.css', 'margin-top', '200px');
  });
  
  it('respects marginBottom prop', () => {
    cy.mount(<CenteredBlock marginBottom={200}>hi</CenteredBlock>);
    cy.get('[data-cy="CenteredBlock"]').should('have.css', 'margin-bottom', '200px');
  });

  it('respects maxWidth prop', () => {
    cy.mount(<CenteredBlock maxWidth={1000}>hi</CenteredBlock>);
    cy.get('[data-cy="CenteredBlock"]').should('have.css', 'max-width', '1000px');
  });

  it('respects style prop', () => {
    cy.mount(<CenteredBlock style={{ fontSize: 123 }}>hi</CenteredBlock>);
    cy.get('[data-cy="CenteredBlock"]').should('have.css', 'fontSize', '123px');
  });

});