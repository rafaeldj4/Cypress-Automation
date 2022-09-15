export default class HomePage {

  //Nav Bar Links

    homeNavLink(){
        return  cy.get('ul.nav.navbar-nav li a').contains("Home")
    }

    signupLoginNavLink(){
        return cy.get('ul.nav.navbar-nav li a').contains("Signup / Login")
    }

}