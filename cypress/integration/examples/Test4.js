describe('test description', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     });
   // code here
   it('Test description', () => {
    //alerts handled in cypress
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    //manualy trigger the event
    //str capture strings of laert
    cy.on('window:alert',(str)=>{
        //mocha assertion to compare 2 strings
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
   });
})