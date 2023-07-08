import { CenteringContainer } from "./CenteringContainer";

describe('<CenteringContainer/>', () => {

  it('renders with children', () => {
    cy.mount(<CenteringContainer>hi</CenteringContainer>);
    cy.get('[data-cy="CenteringContainer"]').should('have.text', 'hi');
  });
  
}); 