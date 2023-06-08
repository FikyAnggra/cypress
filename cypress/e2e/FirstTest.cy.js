context('My First Test',() => {
    beforeEach(()=> {
        cy.visit('http://dev-houston.honestmining.org/login')
    })

    it('Feature Earn 2.0', ()=>{
        cy.get(':nth-child(1) > .tw-flex > .tw-relative > .form-control').type('fiky.anggra@usenobi.com')
        cy.get(':nth-child(2) > .tw-flex > .tw-relative > .form-control').type('Usenobi123#')
        cy.get('.tw-inline-block > .btn > :nth-child(1) > .tw-px-8').click()
        cy.get('.tw-border-t > .tw-flex').should('be.visible').then(()=>{
            cy.get('.tw-block > .btn > :nth-child(1) > .tw-px-8').click()
        })
        cy.get(':nth-child(27) > .c-sidebar-nav-link').click()
    })
})