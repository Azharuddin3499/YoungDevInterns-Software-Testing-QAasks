//Automate a search and validation flow on a website (e.g., Flipkart/Amazon).
/// <reference types="cypress" />


it('google test',() =>{
    cy.visit('https://www.amazon.com/')
    cy.wait(2000); 
    // Make sure the search input exists
    cy.get('input[name="field-keywords"]').type('laptop');
    cy.wait(2000); 
    cy.get('input[type="submit"][value="Go"]').click();
    
    
    cy.get('[id="p_n_size_browse-bin/7817234011"] input[type="checkbox"]').check({ force: true });
    cy.get('#a-autoid-3-announce').click()

})
