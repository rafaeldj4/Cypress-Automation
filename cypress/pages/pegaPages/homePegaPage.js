class homePegaPage {

    elements = {
        span: {
            welcomeUsername: ()=> cy.get('span')
        }
    }

}

module.exports = new homePegaPage()