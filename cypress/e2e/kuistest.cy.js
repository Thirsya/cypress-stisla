describe('User can Open Web', () => {
    // 2. buat cypress test dengan skenario user login, cek halaman user list dan logout
    // it('Login and Open Menu User List', () => {
    //     cy.visit('http://127.0.0.1:8000/');
    //     //2.login page
    //     cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    //     cy.get(':nth-child(3) > .form-control').type('password');
    //     cy.get('.btn').click()
    //     //2.cek menu user list
    //     cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
    //     cy.get(':nth-child(2) > .has-dropdown').click();
    //     cy.get('.active > .dropdown-menu > li > .nav-link').click();
    // // 3. buat cypress test untuk fitur CRUD user list
    //     //create user list
    //     cy.get('.card-header-action > .btn-icon').click();
    //     cy.get('#name').type('vennolme')
    //     cy.get('#email').type('vennolme@gmail.com')
    //     cy.get('#password').type('password')
    //     cy.get('.btn-primary').click()
    //     //edit user list
    //     cy.get(':nth-child(5) > .text-right > .d-flex > .btn-info').click()
    //     cy.get('#name').type('vennolme')
    //     cy.get('.btn-primary').click()
    //     //delete user
    //     cy.get(':nth-child(5) > .text-right > .d-flex > .ml-2 > .btn').click()
    //     //2.logout
    //     cy.get('.navbar-right > :nth-child(2) > .nav-link').click()
    //     cy.wait(200)
    //     cy.get('.text-danger').click()
    //     cy.wait(200)
    // });
    // it('CRUD Menu Item', () => {
    //     cy.visit('http://127.0.0.1:8000/');
    //     //2.login page
    //     cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    //     cy.get(':nth-child(3) > .form-control').type('password');
    //     cy.get('.btn').click()
    //     //visit menu item
    //     cy.get('.form-inline > .navbar-nav > :nth-child(1) > .nav-link').click()
    //     cy.get(':nth-child(4) > .has-dropdown').click()
    //     cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click()
    //     //create
    //     cy.get('.card-header-action > .btn-icon').click()
    //     cy.get(':nth-child(2) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    //     cy.get('.select2-search__field').click()
    //     cy.get('.select2-search__field').type('role{enter}')
    //     cy.get('#name').type('venny meida')
    //     cy.get(':nth-child(5) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    //     cy.get('#permission_name').type('dashboard')
    //     cy.get(':nth-child(5) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    //     cy.get('.select2-search__field').type('login{enter}')
    //     cy.get('.btn-primary').click()
    //     //delete
    //     cy.get(':nth-child(9) > .text-right > .d-flex > .ml-2 > .btn').click()
    //     //2.logout
    //     cy.get('.navbar-right > :nth-child(2) > .nav-link').click()
    //     cy.wait(200)
    //     cy.get('.text-danger').click()
    //     cy.wait(200)
    // });
    it('CRUD User To Role', () => {
        cy.visit('http://127.0.0.1:8000')
  
        //login sebagai superadmin
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('password')
        cy.get('.btn').click()
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
        cy.get(':nth-child(2) > .has-dropdown > span').click()
        cy.get('.active > .dropdown-menu > li > .nav-link').click()
        cy.get('.card-header-action > .btn-icon').click()
        cy.get('#name').type('venny')
        cy.get('#email').type('venny@gmail.com')
        cy.get('#password').type('password')
        cy.get('.btn-primary').click()
  
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
        cy.get(':nth-child(3) > .has-dropdown > span').click()
        cy.get('.dropdown-menu > :nth-child(4) > .nav-link').click()
  
        //create user
        cy.get('.card-header-action > .btn').click()
        cy.get('.select2-selection__arrow').click()
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('venny{enter}')
        cy.get(':nth-child(3) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').type('super-admin{enter}')
        cy.get('.btn-primary').click()
  
        //edit user
        cy.get(':nth-child(4) > .text-right > .d-flex > .btn > .fas').click()
        cy.get(':nth-child(4) > .select2-container > .selection > .select2-selection > .select2-selection__rendered').type('user{enter}')
        cy.get('.btn-primary').click()
  
        
        //delete user
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
        cy.get(':nth-child(2) > .has-dropdown > span').click()
        cy.get('.active > .dropdown-menu > li > .nav-link').click()
        cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click()
        
        //logout
        cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
        cy.get('.text-danger').click();
      })
})