describe('Colour Contrast', () => {
  before(() => {
    cy.visit('/');
  });

  it('has good contrast', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y({
      runOnly: ['cat.color'],
    });
  });
});
