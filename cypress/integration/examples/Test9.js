import 'cypress-iframe'

describe('test description', () => {
   it('Test frames on web page', () => {
      // code here
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.frameLoaded('#courses-iframe')
      cy.iframe().find('a[href="mentorship"]').eq(0).click()

   });
})