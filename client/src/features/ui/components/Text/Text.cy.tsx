import { Text } from './Text'

describe('<Text />', () => {

  it('renders with appropriate text content and classes', () => {
    cy.mount(<Text>hello</Text>);
    cy.get('[data-cy="Text"]').should('have.text', 'hello');
    cy.get('[data-cy="Text"]').should('have.class', 'text');
    cy.get('[data-cy="Text"]').should('have.class', 'text--color-0');
  });

  it('has custom classes alongside default classes', () => {
    cy.mount(<Text className="one two">hello</Text>);
    cy.get('[data-cy="Text"]').should('have.class', 'text');
    cy.get('[data-cy="Text"]').should('have.class', 'text--color-0');
    cy.get('[data-cy="Text"]').should('have.class', 'one');
    cy.get('[data-cy="Text"]').should('have.class', 'two');
  });

  it('colorScheme prop changes color class', () => {
    cy.mount(<Text colorScheme={1}>hello</Text>);
    cy.get('[data-cy="Text"]').should('have.class', 'text--color-1');
  });

  it('look prop changes classes', () => {
    cy.mount(<Text look="link">hello</Text>);
    cy.get('[data-cy="Text"]').should('have.class', 'link');
    cy.get('[data-cy="Text"]').should('have.class', 'link--color-0');
  });

  it('respects style prop', () => {
    cy.mount(<Text style={{ fontSize: 123 }}>hi</Text>);
    cy.get('[data-cy="Text"]').should('have.css', 'fontSize', '123px');
  });

  it('renders span element by default', () => {
    cy.mount(<Text>hi</Text>);
    cy.get('span[data-cy="Text"]');
  });

  it('element prop changes rendered element to h3', () => {
    cy.mount(<Text element="h3">hi</Text>);
    cy.get('h3[data-cy="Text"]');
  });
  
});