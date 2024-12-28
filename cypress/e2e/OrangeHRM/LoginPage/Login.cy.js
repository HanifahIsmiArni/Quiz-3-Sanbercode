/// <referance types="cypress"/>
import LoginPage from "../../../pom/orangeHRM/Login/Login";

describe('Login Feature',() => {
    it('User Login with valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionSummary");
        LoginPage.buttonLogin().click();
        cy.wait("@actionSummary").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        LoginPage.menuDashboard().should('have.text','Dashboard')
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('InvalidUser');
        LoginPage.inputPassword().type('wrongpassword');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        LoginPage.buttonLogin().click();
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.url().should('include', '/auth/login');
        LoginPage.invalidCredentials().should('have.text','Invalid credentials');
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('InvalidUser');
        LoginPage.inputPassword().type('admin123');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        LoginPage.buttonLogin().click();
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.url().should('include','/auth/login');
        LoginPage.invalidCredentials().should('have.text','Invalid credentials')
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('wrongpassword');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        LoginPage.buttonLogin().click();
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        cy.url().should('include','/auth/login');
        LoginPage.invalidCredentials().should('have.text','Invalid credentials')
    })
    it('User Login with valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().clear();
        LoginPage.inputPassword().clear();
        LoginPage.buttonLogin().click();
        cy.url().should('include','/auth/login');
        LoginPage.required().should('have.text','RequiredRequired')
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().clear();
        LoginPage.inputPassword().type('admin123');
        LoginPage.buttonLogin().click();
        cy.url().should('include','/auth/login');
    })
    it('User Login with invalid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().clear();
        LoginPage.buttonLogin().click();
        cy.url().should('include','/auth/login');
    })
    it('User attempts to recover password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        LoginPage.textLogin().should('have.text','Login');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        LoginPage.ForgotPass().contains('Forgot your password?').click();     
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        LoginPage.ResetPass().should('have.text','Reset Password');
    })
})