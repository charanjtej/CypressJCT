import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I am on login page of application`, () => {
  cy.visit("/");
});

When(`provide username and password`, () => {
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

Then(`Verify the user logged in sucessfully`, () => {
  cy.url().should("include", "inventory");
});
