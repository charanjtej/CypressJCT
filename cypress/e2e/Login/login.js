import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I am on login page of application`, () => {
  cy.visit("/");
});

//hard coded passing of values in script
When(`provide username and password`, () => {
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

//Passing the vaules from the feature file.
When(`provide {string} and {string}`, (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Then(`Verify the user logged in sucessfully`, () => {
  cy.url().should("include", "inventory");
});
