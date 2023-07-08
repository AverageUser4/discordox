import { useState } from 'react';
import { Input } from './Input'
import { Look } from 'src/data/types';

interface Props {
  className?: string,
  colorScheme?: number,
  kind?: number,
  look?: Look,
  style?: React.CSSProperties,
  type?: React.HTMLInputTypeAttribute,
  placeholder?: string,
}

function Wrapper(props : Props) {
  const [value, setValue] = useState('');

  return (
    <Input
      {...props}
      value={value}
      setValue={setValue}
    />
  );
}

describe('<Input />', () => {

  it('renders with appropriate classes and value', () => {
    cy.mount(<Wrapper/>);
    cy.get('[data-cy="Input"]').should('have.value', '');
    cy.get('[data-cy="Input"]').should('have.class', 'input');
    cy.get('[data-cy="Input"]').should('have.class', 'input--kind-0');
    cy.get('[data-cy="Input"]').should('have.class', 'input--color-0');
  });

  it('has custom classes alongside default classes', () => {
    cy.mount(<Wrapper className="one two"/>);
    cy.get('[data-cy="Input"]').should('have.class', 'input');
    cy.get('[data-cy="Input"]').should('have.class', 'input--kind-0');
    cy.get('[data-cy="Input"]').should('have.class', 'input--color-0');
    cy.get('[data-cy="Input"]').should('have.class', 'one');
    cy.get('[data-cy="Input"]').should('have.class', 'two');
  });

  it('colorScheme prop changes color class', () => {
    cy.mount(<Wrapper colorScheme={1}/>);
    cy.get('[data-cy="Input"]').should('have.class', 'input--color-1');
  });

  it('kind prop changes kind class', () => {
    cy.mount(<Wrapper kind={1}/>);
    cy.get('[data-cy="Input"]').should('have.class', 'input--kind-1');
  });

  it('look prop changes classes', () => {
    cy.mount(<Wrapper look="link"/>);
    cy.get('[data-cy="Input"]').should('have.class', 'link');
    cy.get('[data-cy="Input"]').should('have.class', 'link--kind-0');
    cy.get('[data-cy="Input"]').should('have.class', 'link--color-0');
  });

  it('respects style prop', () => {
    cy.mount(<Wrapper style={{ fontSize: 123 }}/>);
    cy.get('[data-cy="Input"]').should('have.css', 'fontSize', '123px');
  });

  it('respects type prop', () => {
    cy.mount(<Wrapper type="number"/>);
    cy.get('[data-cy="Input"]').should('have.attr', 'type', 'number');
  });

  it('respects placeholder prop', () => {
    cy.mount(<Wrapper placeholder="abc"/>);
    cy.get('[data-cy="Input"]').should('have.attr', 'placeholder', 'abc');
  });

  it('changes value when typed into', () => {
    cy.mount(<Wrapper/>);
    cy.get('[data-cy="Input"]').type('abc');
    cy.get('[data-cy="Input"]').should('have.value', 'abc');
  });

  it('can be cleared after typing', () => {
    cy.mount(<Wrapper/>);
    cy.get('[data-cy="Input"]').type('abc');
    cy.get('[data-cy="Input"]').should('have.value', 'abc');
    cy.get('[data-cy="Input"]').clear();
    cy.get('[data-cy="Input"]').should('have.value', '');
  });
  
});