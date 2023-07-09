import { BrowserRouter as Router } from "react-router-dom";
import { OpenInBrowser } from "./OpenInBrowser";

describe('<OpenInBrowser/>', () => {

  it('renders', () => {
    cy.mount(<OpenInBrowser/>);
    cy.get('[data-cy="OpenInBrowser"]');
  });
  
  it('initially renders only toggle button', () => {
    cy.mount(<OpenInBrowser/>);
    cy.get('[data-cy="OpenInBrowserButtonToggle"]');
    cy.get('[data-cy="OpenInBrowserButtonConfirm"]').should('not.exist');
    cy.get('[data-cy="OpenInBrowserInputUsername"]').should('not.exist');
    cy.get('[data-cy="OpenInBrowserLabelAgree"]').should('not.exist');
  });
  
  it('after clicking toggle button it disappears and other elements appear', () => {
    cy.mount(
      <Router>
        <OpenInBrowser/>
      </Router>
    );
    cy.get('[data-cy="OpenInBrowserButtonToggle"]').click();
    cy.get('[data-cy="OpenInBrowserButtonToggle"]').should('not.exist');
    cy.get('[data-cy="OpenInBrowserButtonConfirm"]');
    cy.get('[data-cy="OpenInBrowserInputUsername"]');
    cy.get('[data-cy="OpenInBrowserLabelAgree"]').invoke('text').should('match', /agree/i);
    cy.get('[data-cy="OpenInBrowserLabelAgree"]').find('[data-cy="OpenInBrowserCheckboxAgree"]');
  });
  
});