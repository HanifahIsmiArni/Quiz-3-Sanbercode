/// <referance types="cypress"/>
import LoginPage from "../../../pom/orangeHRM/Login/Login";
import DirectoryPage from "../../../pom/orangeHRM/Login/MenuDirectory";

describe('User Directory Feature',() => {
    it('User Enters the Directory Menu',() => {
        LoginPage.webAccessLogin();
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionSummary");
        LoginPage.buttonLogin().click();
        cy.wait("@actionSummary").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        LoginPage.menuDashboard().should('have.text','Dashboard');
        DirectoryPage.webAccessDirectory();
        DirectoryPage.menuDirectory().should('have.text','Directory');
    })
    it('User Searches with Valid Credentials',() => {
        LoginPage.webAccessLogin();
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionSummary");
        LoginPage.buttonLogin().click();
        cy.wait("@actionSummary").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        LoginPage.menuDashboard().should('have.text','Dashboard');
        DirectoryPage.webAccessDirectory();
        DirectoryPage.inputEmployeeName().type('Peter');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
        DirectoryPage.clickJobTitle();
        DirectoryPage.selectLocation();
        DirectoryPage.searchButton();
        DirectoryPage.userProfile();
    });
    it('User resets the directory',() => {
        LoginPage.webAccessLogin();
        LoginPage.textLogin().should('have.text','Login');
        LoginPage.inputUsername().type('Admin');
        LoginPage.inputPassword().type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionSummary");
        LoginPage.buttonLogin().click();
        cy.wait("@actionSummary").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
        LoginPage.menuDashboard().should('have.text','Dashboard');
        DirectoryPage.webAccessDirectory();
        DirectoryPage.inputEmployeeName().type('Peter');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
        DirectoryPage.clickJobTitle();
        DirectoryPage.selectLocation();
        DirectoryPage.resetButton().click();
        DirectoryPage.inputEmployeeName().should('have.value', '');
    });
    
})