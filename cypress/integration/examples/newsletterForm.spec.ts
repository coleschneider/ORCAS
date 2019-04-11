/// <reference types="Cypress" />
// @ts-check
context('Assertions', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
    })
    it('Should show a alert when submitted', () => {
      const form = cy.get('[test-id="contact-form"]').children().first().type('asds')
      form.blur()
      cy.get('[test-id="contact-form-errors"]').should('have.text', 'Invalid email address');
    })
  })