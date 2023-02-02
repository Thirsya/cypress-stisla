describe('Admin', () => {
    it('admin chosee menu group', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
        cy.get(':nth-child(3) > .form-control').type('password');
        cy.get('.btn').click();

        // sidebar
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();

        // menu group
        cy.get(':nth-child(4) > .has-dropdown').click();
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();

        // create
        cy.get('.card-header-action > .btn-icon').click();
        cy.get('#name').type('Testing');
        cy.get('#icon').type('Icon Testing');
        cy.get('.select2-selection__arrow').click();
        cy.get('.select2-search__field').type('das{enter}');
        cy.get('.btn-primary').contains('Submit').click();
        cy.get('.alert').contains('Data berhasil ditambahkan');

        // edit
        cy.get(':nth-child(6) > .text-right > .d-flex > .btn-info').contains('Edit').click();
        cy.get('#name').click().clear().type('Black Box Testing');
        cy.get('.btn-primary').contains('Submit').click();
        cy.get('.alert').contains('Data berhasil diubah');

        // delete
        cy.get(':nth-child(6) > .text-right > .d-flex > .ml-2 > .btn').contains('Delete').click();
        cy.get('.alert').contains('Data berhasil dihapus');
    });
});