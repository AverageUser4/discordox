import { InputAndButton } from './InputAndButton';

describe('<InputAndButton/>', () => {

  it('renders with provided elements', () => {
    cy.mount(
      <InputAndButton
        input={<input data-cy="input"/>}
        button={<button data-cy="button"/>}
      />
    );
    cy.get('[data-cy="InputAndButton"]');
    cy.get('[data-cy="input"]');
    cy.get('[data-cy="button"]');
  });

  it('respects style prop', () => {
    cy.mount(<InputAndButton style={{ fontSize: 123 }} input={<input/>} button={<button/>}/>);
    cy.get('[data-cy="InputAndButton"]').should('have.css', 'fontSize', '123px');
  });
  
});