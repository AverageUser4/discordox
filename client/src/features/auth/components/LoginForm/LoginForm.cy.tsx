import { LoginForm } from "./LoginForm";

describe('<LoginForm/>', () => {

  it('renders', () => {
    cy.mount(<LoginForm/>);
    cy.get('[data-cy="LoginForm"]');
  });
  
  it('renders email input and text inside of label', () => {
    cy.mount(<LoginForm/>);
    cy.get('[data-cy="LoginFormLabelEmail"]').invoke('text').should('match', /email/i);
    cy.get('[data-cy="LoginFormLabelEmail"]').find('[data-cy="LoginFormInputEmail"]');
  });

  it('renders password input and text inside of label', () => {
    cy.mount(<LoginForm/>);
    cy.get('[data-cy="LoginFormLabelPassword"]').invoke('text').should('match', /password/i);
    cy.get('[data-cy="LoginFormLabelPassword"]').find('[data-cy="LoginFormInputPassword"]');
  });
  
  it('renders forgot password button', () => {
    cy.mount(<LoginForm/>);
    cy.get('[data-cy="LoginFormButtonForgotPassword"]');
  });
  
  it('renders submit button', () => {
    cy.mount(<LoginForm/>);
    cy.get('[data-cy="LoginFormButtonSubmit"]');
  });
  
});