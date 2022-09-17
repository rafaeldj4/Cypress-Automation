class homeAutomationPage {

    elements = {
        navbarHomeLink: () => cy.get("ul.nav.navbar-nav li a").contains("Home"),
        navarSignupLoginLink: () => cy.get("ul.nav.navbar-nav li a").contains("Signup / Login"),
        loginAsUser: ()=> cy.get(':nth-child(10) > a'),
        delentAccountLink: ()=> cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }

    

}

module.exports = new homeAutomationPage()