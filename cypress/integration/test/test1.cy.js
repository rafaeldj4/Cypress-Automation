/// <reference types="cypress" />

import HomePage from "../pageObjets/HomePage"
const homepage = new HomePage()
describe("Test1",()=>{

    it("Test Case", ()=>{
        homepage.getUrl()
        cy.log("Hello Word")
    })

})