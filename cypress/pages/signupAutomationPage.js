class signupAutomationPage {

    elements = {
        newUserHeading: () => cy.get(".signup-form h2"),
        nameInput: () => cy.get("[data-qa='signup-name']"),
        emailInput: ()=> cy.get("[data-qa='signup-email']"),
        signupBtn: ()=> cy.get("[data-qa='signup-button']"),
        enterAccountInformationHeading: ()=> cy.get(':nth-child(1) > b'),
        mrGenderRadioButton: () => cy.get("#id_gender1"),
        passwordInput: ()=> cy.get('[data-qa="password"]'),
        dateOfBirthDayInput: ()=> cy.get('[data-qa="days"]'),
        dateOfBirthMonthInput: () => cy.get('[data-qa="months"]'),
        dateOfBirthYearInput: ()=> cy.get('[data-qa="years"]'),
        newsletterCheckbox: ()=> cy.get("#newsletter"),
        recieveOffersCheckbox: ()=> cy.get("#optin"),
        
        //Address Information
        firstnameInput: () => cy.get('[data-qa="first_name"]'),
        lastnameInput: () => cy.get('[data-qa="last_name"]'),
        companyInput: ()=> cy.get('[data-qa="company"]'),
        addressInput: ()=> cy.get('[data-qa="address"]'),
        address2Input: ()=> cy.get('[data-qa="address2"]'),
        countrySelectInput: ()=> cy.get('[data-qa="country"]'),
        stateInput: ()=> cy.get('[data-qa="state"]'),
        cityInput: ()=> cy.get('[data-qa="city"]'),
        zipcodeInput: ()=> cy.get('[data-qa="zipcode"]'),
        mobile_numberInput: ()=> cy.get('[data-qa="mobile_number"]'),
        createAccountBtn: () => cy.get('[data-qa="create-account"]'),

        //Account Create
        account_create_B: ()=> cy.get('b'),
        continueBtn: ()=> cy.get('.pull-right > .btn')
    }


    typeName(name){
        this.elements.nameInput().type(name)
    }

    typeEmail(email){
        this.elements.emailInput().type(email)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    selectDateOfBith(day,month,year){
        this.elements.dateOfBirthDayInput().select(day)
        this.elements.dateOfBirthMonthInput().select(month)
        this.elements.dateOfBirthYearInput().select(year)
    }

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    typeFisrtname(firstname){
        this.elements.firstnameInput().type(firstname)
    }

    typeLastname(lastname){
        this.elements.lastnameInput().type(lastname)
    }

    typeCompany(company){
        this.elements.companyInput().type(company)
    }

    typeAddress(address){
        this.elements.addressInput().type(address)
    }

    typeAddress2(address2){
        this.elements.address2Input().type(address2)
    }

    selectCountry(country){
        this.elements.countrySelectInput().select(country)
    }

    typeState(state){
        this.elements.stateInput().type(state)
    }

    typeCity(city){
        this.elements.cityInput().type(city)
    }

    typeZipcode(zipcode){
        this.elements.zipcodeInput().type(zipcode)
    }

    typeMobileNumber(mobile_number){
        this.elements.mobile_numberInput().type(mobile_number)
    }


}

module.exports = new signupAutomationPage()