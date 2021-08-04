/**
 * Created by Preksha Kasliwal
 */
 import { After, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
 import 'cypress-iframe'
 import CheckoutPage from '../../pages/checkoutPage';
 const checkoutPage = new CheckoutPage();

Given('User visits base URL with path {string}', (path) => {
    checkoutPage.navigate(path);
});

Given('Adds product to cart', () => {
    cy.get(':nth-child(1) > .products__list__list-item__item').click();
        cy.wait(1000);
        cy.get('.button').click();
        cy.wait(1000);
        cy.get('.icon').click();
});

When('Clicks on Continue to checkout', () => {
    cy.get('.button').click();
});

Then('Credit Card payment method should be visible to user', () => {
    cy.wait(1000);
    checkoutPage.verifyTextPresent('.adyen-checkout__payment-method--card > .adyen-checkout__payment-method__header','Credit Card');
});

Then('User should be directed to error page', () => {
  cy.wait(1000);
  checkoutPage.verifyTextPresent('.status__message','Oops! Something went wrong. Please try again.');
});

Given('User selects creditcard as payment method', () => {
  cy.wait(1000);
  checkoutPage.proccesToPayment();
    });
    
When("Enters cardnumber {int}", (cardNumber) => {
      checkoutPage.enterCardNumber(cardNumber);
      });

When("expirydate {int}", (expiryDate) => {
        checkoutPage.enterExpiryDate(expiryDate);
     });
      
When("cvv {int}", (cvv) => {
        checkoutPage.enterCvv(cvv);
    });

Then('User should see error message {string}', (error) => {
        checkoutPage.verifyTextPresent('.adyen-checkout__field--cardNumber > .adyen-checkout__label > .adyen-checkout__error-text',error);
        });
Then('User should see payment success message', () => {
          cy.wait(2000);
          checkoutPage.verifyTextPresent('.status__message','Your order has been successfully placed.');
    });
Then('User should see Incomplete field errors', () => {
            cy.wait(2000);
            checkoutPage.verifyTextPresent('.adyen-checkout__field--cardNumber > .adyen-checkout__label > .adyen-checkout__error-text','Incomplete field');
            checkoutPage.verifyTextPresent('.adyen-checkout__field--expiryDate > .adyen-checkout__label > .adyen-checkout__error-text','Incomplete field');
            checkoutPage.verifyTextPresent('.adyen-checkout__field__cvc > .adyen-checkout__label > .adyen-checkout__error-text','Incomplete field');
            checkoutPage.verifyTextPresent('.adyen-checkout__card__holderName > .adyen-checkout__label > .adyen-checkout__error-text','Invalid cardholder name'); 
     });
          
When("cardholder name {string}", (cardholderName) => {
  checkoutPage.enterName(cardholderName);
   });
When('Clicks on pay', () => {
      checkoutPage.clickOnPay();
      });

When("Enters username {string} password {string}", (user,pwd) => {
        cy.wait(4000);  
        checkoutPage.verifyURLContains("test.adyen.com");
        cy.get('#username').type(user);
        cy.get('#password').type(pwd);
        cy.get('.button').click();    
   });

When('Enters cardnumber {int} expirydate {int} cvv {int} cardholder name {string}', (cardNumber, expiryDate, cvv, cardholderName) => {

       checkoutPage.enterCardNumber(cardNumber);
       checkoutPage.enterExpiryDate(expiryDate);
       checkoutPage.enterCvv(cvv);
       checkoutPage.enterName(cardholderName);
  });

When('Enters authentication {string}', (authPwd) => {
        cy.wait(2000);
        checkoutPage.verifyURLContains("checkout");
        checkoutPage.authenticationPassword(authPwd);
  });
       

// Here we can add code we want to run after each test
 After(() => {
    cy.wait(2000);
  });