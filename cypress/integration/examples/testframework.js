/// <reference types="Cypress"/>
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
describe('test description', () => {
   before(() => {
      cy.fixture('example').then(function (data) {
         this.data = data
      })
   });

   it('Test description', function () {
      const homepage = new HomePage()
      const productPage = new ProductPage()
      
      cy.visit(Cypress.env("url")+ '/angularpractice/')
      homepage.inputName().type(this.data.name)
      homepage.selectGender().select(this.data.gender)
      homepage.twoWayData().should('have.value', this.data.name)
      homepage.inputName().should('have.attr', 'minlength', '2')

      homepage.ShopLink().click()
      this.data.productname.forEach(function (product) {
         cy.selectProduct(product)
      })
      productPage.getCheckout().click()
      //get amount of each product convert to number and sum
      let sum = 0
      productPage.getProducttotal().each((el, index, list) => {
         const price = el.text()
         //spilt the price in an array
         let onlynumber = price.split(" ")
         //get the amount from array 
         onlynumber = onlynumber[1].trim()
         cy.log(onlynumber)
         
         sum = Number(sum)+Number(onlynumber)
         // cy.log(sum);
      
      }).then(function()
      {
         cy.log(sum)
         
      })
      //get total on web page and compare to the sum
      cy.get('h3 strong').then(function(element){
         const amount = element.text()
         var res = amount.split(" ")
         var total = res[1].trim()
         expect(Number(total)).to.equal(sum)
      })

      
      productPage.checkoutCTA().click()  
      productPage.inputCountry().type('Pakistan')
      Cypress.config('defaultCommandTimeout',8000)
      productPage.suggetion().click()
      productPage.agreeCheck().check({ force: true })
      productPage.purchase().click()
      productPage.getAlert().then(function(element){
         const actualText = element.text()
         //chai assertion
         expect(actualText.includes('Success')).to.be.true
      })
   });
})
