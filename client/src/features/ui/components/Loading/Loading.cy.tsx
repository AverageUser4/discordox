import { Loading } from './Loading';

describe('<Loading/>', () => {

  it('renders', () => {
    cy.mount(<Loading/>);
    cy.get('[data-cy="Loading"]');
  });
  
});