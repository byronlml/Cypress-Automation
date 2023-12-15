import { login, logout  } from '../../support/base';
describe("Test Login", () => {
  beforeEach(() => {
    login(); 
  });

  it('Validate login - positive scenario', () => {
    cy.wait(500)
    cy.get("#nava").contains("PRODUCT failure");
  });

  after(() => {
    logout();
  });
});