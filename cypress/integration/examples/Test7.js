describe('test description', () => {
   it('Test web tables', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('tr td:nth-child(2)').each(($el, index, list) => {
         // code here
         const text = $el.text()
         if (text.includes("Python")){
            //next only used with get
            cy.get('tr td:nth-child(2)').eq(index).next().then((textval)=>{
               const priceText = textval.text()
               expect(priceText).to.be.equal('25')
            })
         }
      });
   });
})