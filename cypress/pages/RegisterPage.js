export default class RegisterPage{

    textBoxName = "#name"
    textBoxCompany = "#company"
    textBoxEmail = "#email"
    textBoxPassword = "#password"
    textBoxConfirmPassword = "#password-confirm"
    buttonRegister = "[type='submit']"

    //Don't Create Tiny methods unnecessarily:
    //Read about Design Pattern: KISS for reference.

    // setUserName(username){
    //     cy.get(this.textBoxName).type(username);
    // }

    // setPassword(password){
    //     cy.get(this.textBoxPassword).type(password);
    // }

    registerUser(username, password, companyName, email){
        cy.get(this.textBoxName).type(username);
        cy.get(this.textBoxCompany).type(companyName);
        cy.get(this.textBoxEmail).type(email);
        cy.get(this.textBoxPassword).type(password);
        cy.get(this.textBoxConfirmPassword).type(password);
        cy.get(this.buttonRegister).click();
    }

    //builder pattern:
    /*
        
    */

}
