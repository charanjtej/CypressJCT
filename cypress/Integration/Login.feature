Feature: Login to SauceDemo as standard_user

I want to login to the application as a standard user.

Scenario: Login To The application
    Given I open the application login url.
    When I type in
        | username | password |
        | standard_user | secret_sauce |
    And I click on Login button
    Then URL changes to "https://www.saucedemo.com/inventory.html"