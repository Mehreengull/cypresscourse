describe('test description', () => {
   // code here
   it('Test description', () => {
      // code here
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      //pop hidden methods
      cy.get('div.mouse-hover-content').invoke('show')
      cy.contains('Top').click()
      cy.url().should('contain','top')
   });
})