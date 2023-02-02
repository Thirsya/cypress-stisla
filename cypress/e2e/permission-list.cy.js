describe('Admin', () => {
    it('admin chosee permission list', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
        cy.get(':nth-child(3) > .form-control').type('password');
        cy.get('.btn').click();

        // sidebar
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();

        // permission list
        cy.get(':nth-child(3) > .has-dropdown').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();

        // create
        cy.get('.card-header-action > .btn-icon').contains('Create New Permission').click();
        cy.get('#name').click().type('user');
        cy.get('.btn-primary').contains('Submit').click();
        cy.get('.alert').contains('Permission Created Successfully');

        // edit
        cy.get(':nth-child(5) > .page-link').click();
        cy.get(':nth-child(9) > .text-right > .d-flex > .btn-info').contains('Edit').click();
        cy.get('#name').click().clear().type('test');
        cy.get('.btn-primary').contains('Submit').click();
        cy.get('.alert').contains('Permission Updated Successfully');

        // delete
        cy.get(':nth-child(5) > .page-link').click();
        cy.get(':nth-child(9) > .text-right > .d-flex > .ml-2 > .btn').contains('Delete').click();
        cy.get('.alert').contains('Permission Deleted Successfully');
    });
});