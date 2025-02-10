/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('ROI Calculator E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/'); // Visit the application
  });

  it("should load the ROI calculator page", () => {
    cy.contains("ROI Calculator").should("be.visible");
  });

  it('Test 1: Input fields validation', () => {
    cy.get('#amount-invested').clear().type('1000');
    cy.get('#amount-invested').should('have.value', '1000');

    cy.get('#amount-returned').clear().type('1500');
    cy.get('#amount-returned').should('have.value', '1500');

    // Verify that only numeric values are allowed
    cy.get('#amount-invested').clear().type('abc');
    cy.get('#amount-invested').should('have.value', '');
  });

  it('Test 2: ROI value validation', () => {
    cy.get('#amount-invested').clear().type('1000');
    cy.get('#amount-returned').clear().type('1500');
    
    cy.contains('Return on Investment (ROI): 50.00%'); //  (1500-1000)/1000 * 100
  });

  it('Test 3: Validation of output parameters', () => {
    cy.get('#amount-invested').clear().type('2000');
    cy.get('#amount-returned').clear().type('3000');
    cy.get('#investment-period').invoke('val', 4).trigger('change');

    cy.contains('Total Gain on Investment: USD 1000.00'); // 3000 - 2000
    cy.contains('Return on Investment (ROI): 50.00%'); // (1000/2000) * 100
  });

  it('Test 4: Pie-Chart validation', () => {
    cy.get('#amount-invested').clear().type('2000');
    cy.get('#amount-returned').clear().type('3000');

    cy.get('.recharts-pie').should('exist'); // Ensure Pie Chart is rendered
    cy.get('.recharts-pie-sector').should('have.length', 2); // Ensure two segments exist
  });
});
