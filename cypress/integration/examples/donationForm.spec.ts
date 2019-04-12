/// <reference types="Cypress" />
// @ts-check
context('Donation Form', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
    })
    it('should show an error if input isnt alphanumeric', () => {
      const form = cy.get('[test-id="donation-input"]').type("sadsasd")
      form.blur()
      cy.get('[test-id="donation-form-errors"]').should('have.text', 'Please enter a valid US Dollar amount');
      
    })
    
    it('Should show an alert when submitted', () => {
      const form = cy.get('[test-id="donation-input"]').type("50")
      form.blur()
      const btn = cy.get('[test-id="donate-btn"')
      btn.click()
      
    })

  })