import { Background } from "./Background";

describe('<Background/>', () => {

  it('renders', () => {
    cy.mount(<Background>hi</Background>);
    cy.get('[data-cy="Background"]').should('have.text', 'hi');
  });
  
});