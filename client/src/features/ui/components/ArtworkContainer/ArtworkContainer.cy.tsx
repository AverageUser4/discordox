import { ArtworkContainer } from "./ArtworkContainer";

describe('<ArtworkContainer/>', () => {

  it('renders', () => {
    cy.mount(<ArtworkContainer>hi</ArtworkContainer>);
    cy.get('[data-cy="ArtworkContainer"]').should('have.text', 'hi');
  });
  
});