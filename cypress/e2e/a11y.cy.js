/// <reference types="cypress" />

const thresholds = {
  performance: 85,
  accessibility: 50,
  'best-practices': 85,
  seo: 85,
  pwa: 50,
};

const lighthouseOptions = {};

// Define desktop-specific configuration
const lighthouseConfig = {
  settings: { output: 'html' },
  extends: 'lighthouse:default',
  formFactor: 'desktop',
  screenEmulation: {
    width: 1350,
    height: 940,
    deviceScaleRatio: 1,
    mobile: false,
    disable: false,
  },
  throttling: {
    rttMs: 40,
    throughputKbps: 11024,
    cpuSlowdownMultiplier: 1,
    requestLatencyMs: 0,
    downloadThroughputKbps: 0,
    uploadThroughputKbps: 0,
  },
};

describe('Lighthouse Audit', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should pass Lighthouse audit with custom thresholds', () => {
    cy.lighthouse(thresholds, lighthouseOptions, lighthouseConfig);
  });
});
