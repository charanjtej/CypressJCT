Given(`I open the application login url.`, () => {
    cy.visit("https://www.saucedemo.com/");
});

When(`I type in`, (datatable) => {
    // [When] Describes the action or event that triggers the scenario.
    // <DataTable> argument is detected:
    // - With column headers: use DataTable.rowsHash(), which outputs an object containing key-value pairs for each row (e.g. { key1: value, key2: value }).
    // - With row headers: use DataTable.hashes(), which outputs an array of objects (e.g. [{ key1: value, key2: value }]).
    datatable.hashes().forEach(element => {
        cy.get('#user-name').type(element.username);
        cy.get('#password').type(element.password);
    });
});

When(`I click on Login button`, () => {
    // [When] Describes the action or event that triggers the scenario.
    // whether button is visible befoe clicking
    cy.get('#login-button').contains('Login').should('be.visible').click();
});

Then(`URL changes to {string}`, (expectedUrl) => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.url().should('eq', expectedUrl);
});