
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Pizza Maker', ()=> {
   
    beforeEach(()=> {
        cy.visit('http://localhost:3000/pizza')
        // visit the site again for each test
    })

    
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const specialInput = () => cy.get('input[name="special"]')
    const pepInput = () => cy.get('input[name="pep"]')
    const onionInput = () => cy.get('input[name="onions"]')
    const submitButton = () => cy.get('#submitBtn')

  
   
    it('can type inside inputs', () => {
        nameInput()
        .should('have.value', '')
        .type('justin')
        .should('have.value', 'justin')

        emailInput()
        .should('have.value', '')
        .type('justin@test.com')
        .should('have.value', 'justin@test.com')

        specialInput()
        .should('have.value', '')
        .type('no cheese')
        .should('have.value', 'no cheese')
    })
    describe('testing if things work when pressed', () => {
        it('seeing if we can click checkbox', () => {
            pepInput().should('not.be.checked')
            pepInput().click()
            pepInput().should('be.checked')
            onionInput().should('not.be.checked')
            onionInput().click()
            onionInput().should('be.checked')
        })
        it('can submit', () => {
            submitButton().should('be.disabled')
            nameInput().type('justin')
            emailInput().type('justin@test.com')
            specialInput() .type('extra sauce')
            pepInput().click()
            submitButton().should('not.be.disabled')
            submitButton().click()
            nameInput().should('have.value', '')
            emailInput().should('have.value', '')
            specialInput().should('have.value', '')
          
        })
        it('should not submit if a section is missing', () => {
            submitButton().should('be.disabled')
            nameInput().type('justin')
            emailInput().type('justin@test.com')
            pepInput().click()
            submitButton().should('be.disabled')


        })
    })
})