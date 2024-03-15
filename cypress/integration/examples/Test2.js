
// cypress - Spec
describe('test description', () => {
    it('My second test case', () => {
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
       cy.get('.search-keyword').type('ca')
       //only get visible elements on page
       cy.get('.product:visible').should('have.length', 4)
       //parent child
       cy.get('.products').as('productLocator')
       cy.get('@productLocator').find('.product').each(($el, index, $list)=>{
         //$el has the element stored
         const vegtext = $el.find('h4.product-name').text()
         if (vegtext.includes('Cashews'))
         {
             cy.wrap($el).find('button').click()
         }
       })
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.contains('Place Order').click()
    });
 })