/// <reference types="cypress" />

describe('test login', () => {
    it('Login opened', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get('h4').should('have.text','Login');
        cy.get(':nth-child(2) > label').should('have.text','Email');
        cy.get(':nth-child(2) > .form-control').invoke('attr', 'placeholder').should('contains','Masukkan Alamat Email');
        cy.get('.control-label').should('have.text','Password');
        cy.get(':nth-child(3) > .form-control').invoke('attr', 'placeholder').should('contains','Masukkan Password');
        cy.get('.float-right').contains('Forgot Password?');
        cy.get('.btn').contains('Login');
      })

      it('Login test username empty', () => {
        cy.get(':nth-child(3) > .form-control').type("password");
        cy.get(':nth-child(3) > .form-control').should('have.value','password');
        cy.get('.btn').click();
        cy.get('.invalid-feedback').should('have.text','The email field is required.');
        cy.reload();
    })

    it('Login test password empty', () => {
        cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
        cy.get(':nth-child(2) > .form-control').should('have.value','superadmin@gmail.com');
        cy.get('.btn').click();
        cy.get('.invalid-feedback').should('have.text','The password field is required.');
        cy.reload();
    })

    it('Login test all empty', () => {
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .invalid-feedback').should('have.text','The email field is required.');
        cy.get(':nth-child(3) > .invalid-feedback').should('have.text','The password field is required.');
        cy.reload();
    })

    it('Login test SuperAdmin', () => {
        cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
        cy.get(':nth-child(3) > .form-control').type('password');
        cy.get('.btn').click();
        cy.get('.active > a').should('have.text','Dashboard');
        cy.get('.nav-link > .d-sm-none').should('have.text','Hi, SuperAdmin');
        // cy.get('h1').should('have.text','User List');
        // cy.get('.section-title').should('have.text','User Management');
        // cy.get('h4').should('have.text','User List');
        // cy.get('.card-header-action > .btn-icon').should('have.text','Create New User');
        // cy.get('.import').contains("Import User")
        // cy.get('[href="http://localhost:8000/user-management/export"]').contains("Export User")
        // cy.get('.search').contains("Search User")
    
        // check the table
        cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').contains("th", "#");
        cy.get('.table > tbody > :nth-child(1) > :nth-child(2)').contains("th", "Name");
        cy.get('.table > tbody > :nth-child(1) > :nth-child(3)').contains("th", "Email");
        cy.get('.table > tbody > :nth-child(1) > :nth-child(4)').contains("th", "Created At");
        cy.get('.table > tbody > :nth-child(1) > :nth-child(5)').contains("th", "Action");
    })
      
    it('logout', () => {
        cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
        cy.get('.text-danger').click();
      })

  })