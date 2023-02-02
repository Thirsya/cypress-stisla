
    it('admin chosee role list', () => {
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });

        // sidebar
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();

        // role list
        cy.get(':nth-child(3) > .has-dropdown').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
        cy.get('h1').contains('Role and Permission');
        cy.get('.section-title').contains('Role Management');
        cy.get('h4').contains('Roles List');

        // create
        cy.get('.card-header-action > .btn-icon').click();
        cy.get('#name').click().type('testing');
        cy.get('.btn-primary').contains('Submit').click();
        cy.get('.alert').contains('Role Created Successfully');

        // edit
        cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click();
        cy.get('#name').click().clear().type('test');
        cy.get('.btn-primary').contains('Submit').click();
        cy.get('.alert').contains('Role Updated Successfully');

        // delete
        cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').contains('Delete').click();
        cy.get('.alert').contains('Role Deleted Successfully');
    });