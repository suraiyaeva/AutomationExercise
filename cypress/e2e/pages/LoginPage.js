export class LoginPage {
  visit() {
    cy.visit("https://automationexercise.com/login");
  }

  enterDOB(day, month, year) {
    cy.get('[data-qa="days"]').should("be.visible").select(day);
    cy.get('[data-qa="months"]').should("be.visible").select(month);
    cy.get('[data-qa="years"]').should("be.visible").select(year);
  }

  fillPersonalInformation(user) {
    cy.get('[data-qa="signup-name"]').type(user.fname + " " + user.sname);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get(":nth-child(4) > .top").click();
    cy.get('[data-qa="password"]').type(user.password);
    const dobParts = user.dob.split("/");
    const [day, month, year] = dobParts;
    this.enterDOB(day, month, year);
    cy.get("#newsletter").check();
    cy.get("#optin").check();
  }

  fillAddressInformation(user) {
    cy.get('[data-qa="first_name"]').type(user.fname);
    cy.get('[data-qa="last_name"]').type(user.sname);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.statename);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
  }
  login(email, password) {
    // Visit the login page and log in
    cy.visit("https://automationexercise.com/login");
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();

    // cy.visit("https://automationexercise.com/products");
  }
}
