/// <reference types="Cypress" />
// @ts-check
context('Assertions', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
    })
    it('Should show a alert when submitted', () => {
      const form = cy.get('[test-id="donation-input"]').type("sadsasd")
      form.blur()
      cy.get('[test-id="donation-form-errors"]').should('have.text', 'Please enter a valid US Dollar amount');
      
    })
  })