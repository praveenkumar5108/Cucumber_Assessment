@Product
Feature: Adding Product

  Scenario Outline: Product Add to the cart
    Given user should opened the swaglabs application
    When user enters the "<UserName>"
    And user enters the "<Password>"
    And user click on the login Button
    And user adds the product to the cart "<product>"
    Then user can see the product added to the cart

    Examples: 
      | UserName      | Password     | product               |
      | standard_user | secret_sauce | Sauce Labs Bike Light |
