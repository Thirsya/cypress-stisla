describe('RoleUser', () => {
    before(() => {
        cy.visit('http://127.0.0.1:8000/')
    })
  
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/');
        //login page
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
        cy.get(':nth-child(3) > .form-control').type('password');
        cy.get('.btn').click()
    })
      
    it('Create', () => {
        cy.get('.card-header-action > .btn-icon').click()
        cy.wait(200)
        cy.get('#name').type('user1')
        cy.wait(200)
        cy.get('.btn-primary').click()
        cy.wait(200)
    })
    it('Edit', () => {
        cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click()
        cy.wait(200)
        cy.get('#name').type('user2')
        cy.wait(200)
        cy.get('.btn-primary').click()
        cy.wait(200)
    })
    it('Delete', () => {
        cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click()
        cy.wait(1000)
      })
})