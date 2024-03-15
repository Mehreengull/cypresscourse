describe('test description', () => {
    // code here
    it('test calender', () => {
       // code here
       const monthNumber = '6'
       const date = '15'
       const year = '2027'
       const expectedList = [monthNumber,date,year]
       cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
       cy.get('button.react-date-picker__calendar-button').click()
       cy.get('.react-calendar__navigation__label').click()
       cy.get('.react-calendar__navigation__label').click()
       cy.contains("button", year).click()
       cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber-1)).click()
       cy.contains("abbr",date).click()

       //Assertion
       cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
          //we have 3 elements for the locator we invoke value attribute 
          //on each input and compare with expected output
          cy.wrap($el).invoke('val').should('eq',expectedList[index])
       });
    });
 })