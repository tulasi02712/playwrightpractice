Feature: Ecommerce

  Scenario: Place the order
  Given login to Ecommerce application with "tulasi10121999@gmail.com" and "Tulasi@12"
    When Add "Zara Coat 4" to cart 
    Then Verfiy "Zara Coat 4" is added to cart
    When Enter valid details and place the Order
    Then Verfiy Order present in OrderHistory