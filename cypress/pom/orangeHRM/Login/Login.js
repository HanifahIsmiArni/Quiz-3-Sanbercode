export default class LoginPage {
    static webAccessLogin(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    static textLogin(){
        return cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]');
    }

    static inputUsername(){
        return cy.get('[name="username"]');
    }

    static inputPassword(){
        return cy.get('[name="password"]');
    }

    static buttonLogin(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
    }

    static menuDashboard(){
        return cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]');
    }

    static invalidCredentials(){
        return cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]');
    }

    static required(){
        return cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]');
    }

    static ForgotPass(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }

    static ResetPass(){
        return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    }
}