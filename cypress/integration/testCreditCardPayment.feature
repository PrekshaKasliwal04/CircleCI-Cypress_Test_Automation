Feature: Tests to verify successful Checkout with CreditCard

 Scenario: User should be able to see creditcard option as payment methods
  Given User visits base URL with path "/#/"
  And Adds product to cart
  When Clicks on Continue to checkout 
  Then Credit Card payment method should be visible to user

Scenario: Non 3D Secured Card payment Verification
  Given User visits base URL with path "/#/"
  And User selects creditcard as payment method
  When Enters cardnumber 370000000000002 expirydate 0330 cvv 7373 cardholder name "Amex card"
  And Clicks on pay
  Then User should see payment success message

Scenario:3D Secure -1 Card payment ending to error page
  Given User visits base URL with path "/#/"
  And User selects creditcard as payment method
  When Enters cardnumber 345177925488348 expirydate 0330 cvv 7373 cardholder name "Amex card"
  And Clicks on pay
  And Enters username "user" password "password"
  Then User should be directed to error page

Scenario:3D Secure -2 Card payment
  Given User visits base URL with path "/#/"
  And User selects creditcard as payment method
  When Enters cardnumber 371449635398431 expirydate 0330 cvv 7373 cardholder name "Amex card"
  And Clicks on pay
  And Enters authentication "password"
  Then User should see payment success message
