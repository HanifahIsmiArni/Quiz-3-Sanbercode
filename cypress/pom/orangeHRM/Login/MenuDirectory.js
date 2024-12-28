export default class DirectoryPage {
    static webAccessDirectory(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    }
    static menuDirectory(){
        return cy.get('[class="oxd-text oxd-text--h5 oxd-table-filter-title"]');
    }
    static inputEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }
    static clickJobTitle(){
        return cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click();
    }
    static selectJobTitle(){
        return cy.get('.oxd-select-dropdown').eq(0).click();
    }
    static clickLocation(){
        return cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click();
    }
    static selectLocation(){
        it("select dropdown value",() =>{
            cy.contains("Directory").click()
            cy.get(".oxd-select-text").click()
            cy.get('.oxd-select-dropdown').should('be.visible').contains('New York Sales Office').click()
        })
    }
    static searchButton(){
        return cy.get('.oxd-button--secondary').click();
    }
    static userProfile(){
        return cy.get('[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card"]').should('exist').should('be.visible')
    }
    static resetButton(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--ghost"]')
    }
}