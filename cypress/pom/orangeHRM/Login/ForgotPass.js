export default class ForgotPass {
    static logintext(){
        return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]');
    }

    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static buttonForgotyourpass(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }

    static ForgotPW(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }

    static ResetPass(){
        return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    }
    static ButtonReset(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]');
    }
    static Resetpasssuccesed(){
        return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    }
    static Cancelbutton(){
        return cy.get('[class*="orangehrm-forgot-password-button--cancel"]');
    }
}