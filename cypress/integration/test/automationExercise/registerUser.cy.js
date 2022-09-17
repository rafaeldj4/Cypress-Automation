/// <reference types="cypress" />
import homeAutomationPage from "../../../pages/automationExcercisePages/homeAutomationPage"
import signupAutomationPage from "../../../pages/automationExcercisePages/signupAutomationPage"

describe("Test Suite - Register User", function(){

    let the;

    before(()=>{
        cy.fixture("data.json").then((data)=>{
            the = data
        })
    })

    beforeEach(()=>{
         // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit(the.baseUrl)
    })

    it("Test Case 1: Register User", function(){
        // 3. Verify that home page is visible successfully
        homeAutomationPage.elements.navbarHomeLink().should("be.visible")
        // 4. Click on 'Signup / Login' button
        homeAutomationPage.elements.navarSignupLoginLink().click()
        // 5. Verify 'New User Signup!' is visible
        signupAutomationPage.elements.newUserHeading().should("be.visible").and("contain.text","New User Signup")
        // 6. Enter name and email address
        signupAutomationPage.typeName(the.data.name)
        signupAutomationPage.typeEmail(the.data.email)
        // 7. Click 'Signup' button
        signupAutomationPage.elements.signupBtn().click()
        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        signupAutomationPage.elements.enterAccountInformationHeading().should("be.visible").and("contain.text","Enter Account Information")
        // 9. Fill details: Title, Name, Email, Password, Date of birth
        signupAutomationPage.elements.mrGenderRadioButton().check().should("be.checked")
        signupAutomationPage.typePassword(the.data.password)
        signupAutomationPage.selectDateOfBith(the.data.dateOfBirth.day,the.data.dateOfBirth.month,the.data.dateOfBirth.year)
        // 10. Select checkbox 'Sign up for our newsletter!'
        signupAutomationPage.elements.newsletterCheckbox().check().should("be.checked")
        // 11. Select checkbox 'Receive special offers from our partners!'
        signupAutomationPage.elements.recieveOffersCheckbox().check().should("be.checked")
        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        signupAutomationPage.typeFisrtname(the.data.name)
        signupAutomationPage.typeLastname(the.data.lastname)
        signupAutomationPage.typeCompany(the.data.company)
        signupAutomationPage.typeAddress(the.data.address)
        signupAutomationPage.typeAddress2(the.data.address2)
        signupAutomationPage.selectCountry(the.data.country[1])
        signupAutomationPage.typeState(the.states.united_states[5])
        signupAutomationPage.typeCity(the.data.city)
        signupAutomationPage.typeZipcode(the.data.zipcode)
        signupAutomationPage.typeMobileNumber(the.data.phone_number)
        // 13. Click 'Create Account button'
        signupAutomationPage.elements.createAccountBtn().click()
        // 14. Verify that 'ACCOUNT CREATED!' is visible
        signupAutomationPage.elements.account_create_B().should("be.visible").and("contain.text","Account Created")
        // 15. Click 'Continue' button
        signupAutomationPage.elements.continueBtn().click({force:true})
        // 16. Verify that 'Logged in as username' is visible
        homeAutomationPage.elements.loginAsUser().should("be.visible").and("contain.text",the.data.name)
        // 17. Click 'Delete Account' button
        homeAutomationPage.elements.delentAccountLink().click()
        // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

        //This test will fail because the website is having an issue
    })
})