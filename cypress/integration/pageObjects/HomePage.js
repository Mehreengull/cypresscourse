class HomePage
{
inputName(){
    return cy.get('.form-control[name*="name"]:nth-child(2)')
}
selectGender(){
    return cy.get('#exampleFormControlSelect1')
}
ShopLink(){
    return cy.get('.nav-link[href="/angularpractice/shop"]')
}
twoWayData(){
    return cy.get(':nth-child(4) > .ng-untouched')
}
}
export default HomePage