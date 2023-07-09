import { BrowserRouter as Router } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";

describe('<RegisterForm/>', () => {

  it('renders', () => {
    cy.mount(
      <Router>
        <RegisterForm/>
      </Router>
    );
    cy.get('[data-cy="RegisterForm"]');
  });
  
  it('renders email input and text inside of label', () => {
    cy.mount(
      <Router>
        <RegisterForm/>
      </Router>
    );
    cy.get('[data-cy="RegisterFormLabelEmail"]').invoke('text').should('match', /email/i);
    cy.get('[data-cy="RegisterFormLabelEmail"]').find('[data-cy="RegisterFormInputEmail"]');
  });

  it('renders username input and text inside of label', () => {
    cy.mount(
      <Router>
        <RegisterForm/>
      </Router>
    );
    cy.get('[data-cy="RegisterFormLabelUsername"]').invoke('text').should('match', /username/i);
    cy.get('[data-cy="RegisterFormLabelUsername"]').find('[data-cy="RegisterFormInputUsername"]');
  });

  it('renders password input and text inside of label', () => {
    cy.mount(
      <Router>
        <RegisterForm/>
      </Router>
    );
    cy.get('[data-cy="RegisterFormLabelPassword"]').invoke('text').should('match', /password/i);
    cy.get('[data-cy="RegisterFormLabelPassword"]').find('[data-cy="RegisterFormInputPassword"]');
  });

  it('renders agree checkbox and text inside of label', () => {
    cy.mount(
      <Router>
        <RegisterForm/>
      </Router>
    );
    cy.get('[data-cy="RegisterFormLabelAgree"]').invoke('text').should('match', /agree/i);
    cy.get('[data-cy="RegisterFormLabelAgree"]').find('[data-cy="RegisterFormCheckboxAgree"]');
  });

  it('renders agree checkbox and text inside of label', () => {
    cy.mount(
      <Router>
        <RegisterForm/>
      </Router>
    );
    cy.get('[data-cy="RegisterFormLabelSendEmails"]').invoke('text').should('match', /emails/i);
    cy.get('[data-cy="RegisterFormLabelSendEmails"]').find('[data-cy="RegisterFormCheckboxSendEmails"]');
  });
  
  it('renders submit button', () => {
    cy.mount(
      <Router>
        <RegisterForm/>
      </Router>
    );
    cy.get('[data-cy="RegisterFormButtonSubmit"]');
  });

  it('respects style prop', () => {
    cy.mount(
      <Router>
        <RegisterForm style={{ fontSize: 123 }}/>
      </Router>
    );
    cy.get('[data-cy="RegisterForm"]').should('have.css', 'font-size', '123px');
  });
  
});