
class loginPegaPage {

    elements = {
        inputs: {
            username: ()=> cy.get("#user_name"),
            password: ()=> cy.get("#user_pass")
        },

        buttons: {
            loginBtn: ()=> cy.get("#login_button")
        }
    }

    //Functions
    typeUsername(username){
        this.elements.inputs.username().type(username)
    }

    typePassword(password){
        this.elements.inputs.password().type(password)
    }

}

module.exports = new loginPegaPage()