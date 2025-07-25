/// <reference types="cypress" />


it('google test',() =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(2000); 
    // Type username using deep/nested selector
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.wait(2000); 
    // Type password using deep/nested selector
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.wait(2000); 
    // Click the login button
    cy.get('.oxd-button').click()
    cy.wait(2000); 
    // Click on the dashboard menu item
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    
})
