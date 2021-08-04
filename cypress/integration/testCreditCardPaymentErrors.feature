Feature: Tests to verify various error checks while using CreditCard payment

Scenario Outline: User should get errors with invalid card numbers
  Given User visits base URL with path "/#/"
  And User selects creditcard as payment method
  When Enters cardnumber <cardNumber>
  And expirydate <expiryDate> 
  And cvv <cvv> 
  And cardholder name <name>
  And Clicks on pay
  Then User should see error message <errorMsg>

  Examples:
  | cardNumber        | expiryDate| cvv  | name               | errorMsg               |
  | 370000000000009   | 0330      | 7373 | "American Express" |  "Invalid card number" |
  | 37000000          | 0330      | 7373 | "American Express" |  "Incomplete field"    |

Scenario: User should get to errors page after entering invalid expiry date
  Given User visits base URL with path "/#/"
  And User selects creditcard as payment method
  When Enters cardnumber 370000000000002
  And expirydate 2323
  And cvv 7373
  And cardholder name "Amex card"
  And Clicks on pay
  Then User should be directed to error page

Scenario: User should get error when clicks on pay without filling any details
  Given User visits base URL with path "/#/"
  And User selects creditcard as payment method
  When Clicks on pay
  Then User should see Incomplete field errors