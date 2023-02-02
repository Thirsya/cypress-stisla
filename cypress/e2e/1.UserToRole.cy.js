    it('Admin can see User To Role!', () => {
        //Admin Login First
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });

        //Admin click Side Bar
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()

        //Role Management Admin Page
        cy.get(':nth-child(3) > .has-dropdown').contains("Role Management").and("be.visible")
        cy.get(':nth-child(3) > .has-dropdown').click()
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').contains("Role List").and("be.visible")
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains("Permission List").and("be.visible")
        cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').contains("Permission To Role").and("be.visible")
        cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').contains("User To Role").and("be.visible")
        
        //Role List Admin Page
        cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click()
    })

    it('CRUD User To Role!', () => {
        //Admin Login First
        cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });

        //Admin click Side Bar
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()

        //Role Management Admin Page
        cy.get(':nth-child(3) > .has-dropdown').contains("Role Management").and("be.visible")
        cy.get(':nth-child(3) > .has-dropdown').click()
        cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').contains("Role List").and("be.visible")
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains("Permission List").and("be.visible")
        cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').contains("Permission To Role").and("be.visible")
        cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').contains("User To Role").and("be.visible")
        
        //Role List Admin Page
        cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click()

        //Cek View
        cy.get('h1').contains('Roles and Permission');
        cy.get('.section-title').contains('Assign User To Role');
        cy.get('h4').contains('List User Assigned To Role')

        //Click Assign User To Role
        cy.get('.card-header-action > .btn').click()

        //Click Dropdown
        cy.get('.select2-selection__arrow').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('user{downArrow}{enter}');
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click();
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').type('super{enter}');
        cy.get('.btn-primary').click();
        cy.get('.alert').contains('User Assigned To Role Successfully');

        //edit
        cy.get(':nth-child(2) > .text-right > .d-flex > .btn').click();
        cy.get('.select2-selection__arrow').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('SuperAdmin{enter}');
        cy.get(':nth-child(4) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').click();
        cy.get(':nth-child(4) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').type('user{enter}');
        cy.get('.btn-primary').click( { force: true });
        cy.get('.alert').contains('User Assigned To Role Successfully');

         // delete
         cy.get(':nth-child(3) > .text-right > .d-flex > .btn').click();
         cy.get('.select2-selection__arrow').click();
         cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('user{enter}');
         cy.get('[title="super-admin"] > .select2-selection__choice__remove').click();
         cy.get('.btn-primary').click( { force: true });
         cy.get('.alert').contains('User Assigned To Role Successfully');
    })