it('CRUD USER', () => {
    cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });
    cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click();
    cy.get(':nth-child(2) > .has-dropdown > span').should('have.text','Users Management');
    cy.get(':nth-child(2) > .has-dropdown > span').click();
    cy.get('.active > .dropdown-menu > li > .nav-link').should('have.text','User List').click();
    cy.get('.card-header-action > .btn-icon').click();
    cy.get(':nth-child(2) > label').should('have.text','Your Name');
    cy.get('#name').type('TestADDUser');
    cy.get('#email').type('TestADDUser@gmail.com');
    cy.get('#password').type('test1234');
    cy.get('.btn-primary').click();
    cy.get('.table > tbody > :nth-child(4) > :nth-child(2)').should('have.text','TestADDUser');
    cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click();
    cy.get('#name').clear();
    cy.get('#name').type('UserSudahdiEdit');
    cy.get('.btn-primary').click();
    cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click();


})




