export class ContactUsPage {
  fileName = "automation.txt";
  navigateToContactPage() {
    cy.visit("https://automationexercise.com/contact_us");
  }
  FormSubmission(fname, email) {
    cy.get('[data-qa="name"]').type(fname);
    cy.get('[data-qa="email"]').type(email);
    cy.get('[data-qa="subject"]').type("Regarding Price");
    cy.get('[data-qa="message"]').type("Price is so high");
    //cy.get('input[type="file"]').attachFile(fileName);
    cy.get(":nth-child(6) > .form-control").attachFile(this.fileName);
    cy.get('[data-qa="submit-button"]').click();
  }
}
