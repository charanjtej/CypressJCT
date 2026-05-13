describe("template spec", () => {
  it("AI createion of test case", () => {
    cy.prompt(
      [
        "visit https://www.saucedemo.com/",
        "type {{username}} in the email field",
        "type {{password}} in the password field",
        "click the login button",
        "verify url changed contains inventory",
      ],
      {
        placeholders: { username: "standard_user", password: "secret_sauce" },
      },
    );
  });
});
