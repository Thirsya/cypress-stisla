describe('Admin can see Role Management Page', () => {


    // it('Admin can see User To Role!', () => {
    //     //Admin Login First
    //     cy.typeLogin({ email: 'superadmin@gmail.com', password: 'password' });

    //     //Admin click Side Bar
    //     cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()

    //     //Role Management Admin Page
    //     cy.get(':nth-child(3) > .has-dropdown').contains("Role Management").and("be.visible")
    //     cy.get(':nth-child(3) > .has-dropdown').click()
    //     cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').contains("Role List").and("be.visible")
    //     cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').contains("Permission List").and("be.visible")
    //     cy.get('.active > .dropdown-menu > :nth-child(3) > .nav-link').contains("Permission To Role").and("be.visible")
    //     cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').contains("User To Role").and("be.visible")
        
    //     //Role List Admin Page
    //     cy.get('.active > .dropdown-menu > :nth-child(4) > .nav-link').click()
    // })

    it('Admin can add new User To Role!', () => {
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

        //Click Assign User To Role
        cy.get('.card-header-action > .btn').click()

        //Click Dropdown
        cy.get('.select2-selection__arrow').click()
        // cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("user{enter}")
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("user{downArrow}{enter}")
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').type("tess{enter}")
        cy.get('.btn-primary').click()
    })


})