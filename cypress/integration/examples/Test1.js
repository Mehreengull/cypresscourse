
// cypress - Spec
describe('test description', () => {
   it('My first test case', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.get('.search-keyword').type('ca')
      //only get visible elements on page
      cy.get('.product:visible').should('have.length', 4)
      //parent child
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').should('have.length',4)
      cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
      cy.get('@productLocator').find('.product').each(($el)=>{
        //$el has the element stored
        const vegtext = $el.find('h4.product-name').text()
        if (vegtext.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
      })
      //assert logo text
      cy.get('.brand').should('have.text',"GREENKART")
      cy.get('.brand').then(function(logoelement){
         cy.log(logoelement.text())

      })
   });
})