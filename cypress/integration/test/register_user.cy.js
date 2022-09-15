/// <reference types="cypress" />

import HomePage from "../pageObjets/HomePage"
import SignupLoginPage from "../pageObjets/SignupLoginPage";
const homepage = new HomePage()
const signupLoginPage = new SignupLoginPage()
describe("Register User - Test Suite",()=>{

    let data;
    before(()=>{
        cy.fixture("data").then((mydata)=>{
            data = mydata
        })

    })

    it("Regiser user", ()=>{
        
        //1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit(data.baseUrl)
        
        //3.Verify that home page is visible successfully
        homepage.homeNavLink().should("be.visible").and("contain.text","Home")
        //4. Click on 'Signup / Login' button
        homepage.signupLoginNavLink().click()
        
        // 5. Verify 'New User Signup!' is visible
        signupLoginPage.newUserSignup().should("be.visible").and("contain.text","New User Signup")
        // 6. Enter name and email address
        signupLoginPage.signupNameInput().type(`${data.name} ${data.lastname}`)
        signupLoginPage.signupEmailInput().type(data.email)
        // 7. Click 'Signup' button
        signupLoginPage.signupButton().click()
        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        signupLoginPage.enterAccountText().should("be.visible").and("include.text","Enter Account Information")
        // 9. Fill details: Title, Name, Email, Password, Date of birth
        signupLoginPage.mrGender().check().should("be.checked")
        signupLoginPage.passwordInput().type(data.password)
        cy.fillDateOfBirth(data.dateOfBirth.day,data.dateOfBirth.month,data.dateOfBirth.year)
        // 10. Select checkbox 'Sign up for our newsletter!'
        signupLoginPage.newsletter_checkbox().check().should("be.checked")
        // 11. Select checkbox 'Receive special offers from our partners!'
        signupLoginPage.receiveOfferts_checkbox().check().should("be.checked")
        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        // 13. Click 'Create Account button'
        // 14. Verify that 'ACCOUNT CREATED!' is visible
        // 15. Click 'Continue' button
        // 16. Verify that 'Logged in as username' is visible
        // 17. Click 'Delete Account' button
        // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button


    })

})