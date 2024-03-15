describe('test description', () => {
   // code here
   it('Multiple tabs', () => {
      // code here
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('#opentab').invoke('removeAttr','target').click()
      cy.origin("https://www.qaclickacademy.com/", ()=>{
        //any new acttions on this page goes here
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
      })
   });
})