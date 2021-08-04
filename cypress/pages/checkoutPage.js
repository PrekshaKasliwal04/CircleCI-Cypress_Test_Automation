import BasePage from './basePage.js'

export default class CheckoutPage extends BasePage {

    constructor() {
        super()
    }
    proccesToPayment()
    {
        cy.wait(4000);
        cy.get(':nth-child(1) > .products__list__list-item__item').click();
        cy.wait(1000);
        cy.get('.button').click();
        cy.wait(1000);
        cy.get('.icon').click();
        cy.get('.button').click();
        cy.wait(1000);
        this.verifyTextPresent('.adyen-checkout__payment-method--card > .adyen-checkout__payment-method__header','Credit Card');
        cy.get('.adyen-checkout__payment-method--card > .adyen-checkout__payment-method__header > .adyen-checkout__payment-method__header__title > .adyen-checkout__payment-method__radio').click();
        cy.wait(6000);
    }
    enterCardNumber(cardNumber){
        // Enter card number
        cy.wait(4000);
        cy.get('iframe')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body')
          cy.getWithinIframe('[id="encryptedCardNumber"]').type(cardNumber);
        })

    }
    enterExpiryDate(expiryDate){
        cy.wait(4000);
    // Enter expiry date
    cy.get('.adyen-checkout__field--expiryDate > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input')
    cy.frameLoaded('.adyen-checkout__field--expiryDate > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input > .js-iframe') 
    cy.iframe('.adyen-checkout__field--expiryDate > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input > .js-iframe').find('#encryptedExpiryDate').should('be.visible').type(expiryDate);
    }
    enterCvv(cvv){
        // Enter CVV
        cy.wait(4000);  
        cy.get('.adyen-checkout__field__cvc > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input')
        cy.frameLoaded('.adyen-checkout__field__cvc > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input > .js-iframe') 
        cy.iframe('.adyen-checkout__field__cvc > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input > .js-iframe').find('#encryptedSecurityCode').should('be.visible').type(cvv);
        cy.wait(4000); 
    }
    enterName(cardholderName){
        // Enter name 
        cy.get('.adyen-checkout__card__holderName > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input').type(cardholderName);
        cy.wait(2000);

    }
    clickOnCartButton(){
        cy.wait(2000);
        cy.get('[data-testid=submit]').click();
        cy.wait(2000);
    }
    clickOnPay(){
        cy.get('.adyen-checkout__card-input > .adyen-checkout__button > .adyen-checkout__button__content').click();
        cy.wait(2000);
    }


    verifyTextPresent(locator,expected){
        cy.wait(2000);
        cy.get(locator).invoke('text').then(text => {
            expect(text).to.contain(expected);
        })
    } 
    authenticationPassword(authPwd){
        cy.wait(4000);
        cy.get('iframe')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body')
          cy.getWithinIframe('[name="answer"]').type(authPwd);
          cy.getWithinIframe('.button--primary').click();
          cy.wait(4000);
        })
    }
}


