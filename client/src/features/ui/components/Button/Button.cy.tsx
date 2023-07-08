import { Button } from './Button'

describe('<Button />', () => {

  it('renders with appropriate text content and classes', () => {
    cy.mount(<Button>hello</Button>);
    cy.get('[data-cy="Button"]').should('have.text', 'hello');
    cy.get('[data-cy="Button"]').should('have.class', 'button');
    cy.get('[data-cy="Button"]').should('have.class', 'button--kind-0');
    cy.get('[data-cy="Button"]').should('have.class', 'button--color-0');
  });

  it('onClick callback gets called after click', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>x</Button>);
    cy.get('[data-cy="Button"]').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });

  it('has custom classes alongside default classes', () => {
    cy.mount(<Button className="one two">hello</Button>);
    cy.get('[data-cy="Button"]').should('have.class', 'button');
    cy.get('[data-cy="Button"]').should('have.class', 'button--kind-0');
    cy.get('[data-cy="Button"]').should('have.class', 'button--color-0');
    cy.get('[data-cy="Button"]').should('have.class', 'one');
    cy.get('[data-cy="Button"]').should('have.class', 'two');
  });

  it('colorScheme prop changes color class', () => {
    cy.mount(<Button colorScheme={1}>hello</Button>);
    cy.get('[data-cy="Button"]').should('have.class', 'button--color-1');
  });

  it('kind prop changes kind class', () => {
    cy.mount(<Button kind={1}>hello</Button>);
    cy.get('[data-cy="Button"]').should('have.class', 'button--kind-1');
  });

  it('look prop changes classes', () => {
    cy.mount(<Button look="link">hello</Button>);
    cy.get('[data-cy="Button"]').should('have.class', 'link');
    cy.get('[data-cy="Button"]').should('have.class', 'link--kind-0');
    cy.get('[data-cy="Button"]').should('have.class', 'link--color-0');
  });

  it('respects style prop', () => {
    cy.mount(<Button style={{ fontSize: 123 }}>hi</Button>);
    cy.get('[data-cy="Button"]').should('have.css', 'fontSize', '123px');
  });

});