describe('Check boxes and drop downs', () => {
    beforeEach(() => {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    });
   it('Test check box automation', () => {
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should("not.be.checked")
      cy.get('input[type="checkbox"]').check(['option2','option3'])
   });

   //Dropdown
   it('Test Static Dropdown', () => {
      cy.get('select').select('Option2').should('have.value','option2')
   });

   it.only('Test Dynamic Dropdown', () => {
    cy.get("#autocomplete").type('ind')
    cy.get(".ui-menu-item div").each(($el, index, list) => {
       // code here
       if($el.text()==="Indonesia")
       {
        $el.click()
       }
    });
    cy.get("#autocomplete").should('have.value','Indonesia')
    //visible and invisible
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    //radio button
    cy.get('input[value="radio2"]').check().should('be.checked').and('have.value','radio2')
    
   });
})