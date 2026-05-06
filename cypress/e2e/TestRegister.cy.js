// const { default: RegisterPage } = require("../pages/RegisterPage");
import RegisterPage from "../pages/RegisterPage";

describe('User Registration Validatoin',()=>{
    beforeEach(() =>{
        cy.visit("https://blazedemo.com/register");
        // cy.logger("DemoBlaze", "Launched Successfully for User Registration");
    });



    it('verify valid user registration', () =>{
        cy.fixture("RegisterUserData").then((userData)=>{
            const registerObj = new RegisterPage();
            registerObj.registerUser(userData.username, userData.password, userData.companyName, userData.email);
        });
    });

});