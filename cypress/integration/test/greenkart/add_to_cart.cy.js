/// <reference types="cypress" />

describe("Add to Cart - Test Suite",function(){
    
    let the;
    beforeEach(()=>{
        cy.fixture("greenkart_data.json").then((data)=>{
            the = data
        })
        cy.visit(the.url)
    })

    it("Add Product to Cart",function(){

    })

})