/// <reference types="cypress" />
import loginPegaPage from "../../../pages/pegaPages/loginPegaPage"
import homePegaPage from "../../../pages/pegaPages/homePegaPage"

describe("Login Pega Test Suite", function(){

    let the;
    before(()=>{
        cy.fixture("pega_data.json").then((data)=>{
            the = data
        })
    })
    beforeEach(()=>{
        cy.visit(the.url)
    })

    it("Test Case 1 - Login with Valid Credentials", function(){
        loginPegaPage.typeUsername(the.username)
        loginPegaPage.typePassword(the.password)
        loginPegaPage.elements.buttons.loginBtn().click()
        homePegaPage.elements.span.welcomeUsername().should("be.visible").and("contain.text",the.username)
    })

})