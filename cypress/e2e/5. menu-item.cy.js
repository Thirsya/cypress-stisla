describe('Admin', () => {
    it('admin chosee menu item', () => {
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });

        // sidebar
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();

        // menu item
        cy.get(':nth-child(4) > .has-dropdown').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();

        // create
        cy.get('.card-header-action > .btn-icon').click();
        cy.get(':nth-child(2) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click();
        cy.get('.select2-search__field').type('das{enter}');
        cy.get('#name').type('menu');
        cy.get('#permission_name').type('menu-test.index');
        cy.get(':nth-child(5) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click();
        cy.get('.select2-search__field').type('ope{enter}');
        cy.get('.btn-primary').contains('Submit').click();
        cy.get('.alert').contains('Data berhasil ditambahkan');

        // edit (blank page)
        cy.get(':nth-child(10) > .text-right > .d-flex > .btn-info').contains('Edit').click();
        cy.visit("http://127.0.0.1:8000/menu-management/menu-item");

        // delete
        cy.get(':nth-child(10) > .text-right > .d-flex > .ml-2 > .btn').contains('Delete').click();
        cy.get('.alert').contains('Data berhasil dihapus');
    });
});