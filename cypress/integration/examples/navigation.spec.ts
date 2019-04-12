/// <reference types="Cypress" />
// @ts-check
context('Navigation', () => {

  beforeEach(() => {
    cy.visit('localhost:8080')
    })


    context('Scrolling on Desktop', () => {
      it('Should be able to use links on mobile to navigate', () => {
        cy.get('.header-main-nav').children()
        .nextUntil('div')
        .each((el, index, list) => {
          cy.wrap(el).click()
          const link = el.children().first()
          if(link.hasClass('dropdown-text')){
            return
          }
          cy.wrap(link).should('have.class', 'current')
        })
      })
    })
    context('Scrolling Mobile', () => {

      it('Should be able to open and close the header on Mobile', () => {
        cy.viewport(500, 750);
        


        const links = cy.get('.header-nav-wrap .is-open').children()
        
        links.nextUntil('div').each(element => {
          
          cy.get('[test-id="toggle"]').click() // open again
          // const link = element.children().first();
          // cy.wrap(link).should('have.class', 'current')
        })
      })

    })
  })