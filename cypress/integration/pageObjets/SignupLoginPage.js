export default class SignupLoginPage {

    newUserSignup(){
        return cy.get("div.signup-form h2")
    }

    signupNameInput(){
        return cy.get("div.signup-form input[name='name']")
    }

    signupEmailInput(){
        return cy.get("div.signup-form input[name='email']")
    }

    signupButton(){
        return cy.get("div.signup-form button")
    }

    enterAccountText(){
        return cy.get(':nth-child(1) > b')
    }

    mrGender(){
        return cy.get("#id_gender1")
    }

    mrsGender(){
        return cy.get("id_gender2")
    }

    passwordInput(){
        return cy.get("#password")
    }

    dateOfBirth_Day(){
        return cy.get("#days")
    }

    dateOfBirth_Month(){
        return cy.get("#months")
    }

    dateOfBirth_Year(){
        return cy.get("#years")
    }

    newsletter_checkbox(){
        return cy.get("#newsletter")
    }

    receiveOfferts_checkbox(){
        return cy.get("#optin")
    }
}