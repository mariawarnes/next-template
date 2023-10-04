import LighthouseConfig from './config';

describe('Lighthouse', () => {
  before(() => {
    cy.visit('/');
  });

  it('should ', () => {
    const thresholds = {
      performance: 70,
    };
    cy.lighthouse(thresholds, LighthouseConfig.defaultSettings);
  });
});
