/// <reference types="Cypress" />
// @ts-check
context('Newsletter', () => {
  beforeEach(() => {
    cy.visit('localhost:8080')
    })
    // it('Should show a alert when submitted', () => {
    //   const form = cy.get('[test-id="contact-form"]').children().first().type('asds')
    //   form.blur()
    //   cy.get('[test-id="contact-form-errors"]').should('have.text', 'Invalid email address');
    // })
    it('should show a succesfull response', () => {
      cy.server()
      cy.fixture('newsletterSuccess').then(response => {
        cy.route('POST', 'http://localhost:3000', response)
      })
      const form = cy.get('[test-id="contact-form"]')
      
      form.children().first().type('testing@gmail.com')
      cy.get('form').submit()
      
    })
  })