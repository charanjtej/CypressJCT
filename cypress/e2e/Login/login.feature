Feature: Login

Scenario: Login with Valid Credentials
Given I am on login page of application
When  provide username and password 
Then Verify the user logged in sucessfully