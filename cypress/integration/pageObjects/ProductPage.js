class ProductPage{
getCheckout(){
    return cy.contains('Checkout')
}
checkoutCTA(){
    return cy.get('.btn.btn-success')
}
inputCountry(){
    return cy.get('#country')
}
suggetion(){
    return cy.get('div[class="suggestions"] ul li a')
}
agreeCheck(){
    return cy.get('#checkbox2')
}
purchase(){
    return cy.get('.ng-untouched > .btn')
}
getAlert(){
    return cy.get('.alert')
}
getProducttotal(){
    return cy.get('tr td:nth-child(4) strong')
}
}
export default ProductPage