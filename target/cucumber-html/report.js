$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Test Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Possitive Login Test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should be on the Products Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Possitive Login Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should be on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_should_be_on_the_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login Test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should get the \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce12",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Negative Login Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"secret_sauce12\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should get the \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_should_get_the_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Product.feature");
formatter.feature({
  "name": "Adding Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Product Add to the cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user adds the product to the cart \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user can see the product added to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "product"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Bike Light"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Product Add to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Opened Swag Lab Application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTest.user_opened_swag_lab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTest.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.user_enter_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds the product to the cart \"Sauce Labs Bike Light\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductAdd.user_adds_the_product_to_the_cart_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the product added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductAdd.user_can_see_the_product_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});