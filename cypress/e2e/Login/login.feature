Feature: Login

Scenario: Login with Valid Credentials
Given I am on login page of application
When  provide "<user_details>" and "<password_details>" 
Then Verify the user logged in sucessfully

Examples:
    | user_details | password_details |
    |standard_user|secret_sauce|
    |problem_user|secret_sauce|