/// <referance types="cypress"/>
import ForgotPass from "../../../pom/orangeHRM/Login/ForgotPass";

describe('Forgot your password? Feature',() => {
    it('User navigates to the reset password page',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        ForgotPass.logintext().should('have.text','Login');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        ForgotPass.buttonForgotyourpass().contains('Forgot your password?').click();   
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        ForgotPass.ResetPass().should('have.text','Reset Password');
    })
    it('User wants to reset their password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        ForgotPass.ResetPass().should('have.text','Reset Password');
        ForgotPass.inputUsername().type('Admin');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        ForgotPass.ButtonReset().contains('Reset Password').click(); 
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        ForgotPass.Resetpasssuccesed().should('have.text','Reset Password link sent successfully');
    })
    it('User cancels the password reset',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        ForgotPass.ResetPass().should('have.text','Reset Password');
        cy.intercept('GET', '**/core/i18n/messages').as('i18nMessages');
        ForgotPass.Cancelbutton().click(); 
        cy.wait('@i18nMessages').then((intercept) => {
            expect(intercept.response.statusCode).to.equal(304);
        });
        ForgotPass.logintext().should('have.text','Login');
    })
})