import { useState } from 'react';
import { Checkbox } from './Checkbox';

function Wrapper({ kind = 0 }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      kind={kind}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
    />
  );
}

describe('<Checkbox/>', () => {

  it('renders and is not checked', () => {
    cy.mount(<Wrapper/>);
    cy.get('[data-cy="Checkbox"]').should('not.be.checked');
  });

  it('toggles checked state after clicks', () => {
    cy.mount(<Wrapper/>);
    cy.get('[data-cy="Checkbox"]').click();
    cy.get('[data-cy="Checkbox"]').should('be.checked');
    cy.get('[data-cy="Checkbox"]').click();
    cy.get('[data-cy="Checkbox"]').should('not.be.checked');
  });
  
});