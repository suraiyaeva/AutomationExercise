///<reference types="cypress"/>

it("Google Search", () => {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Automation step by Step {enter}");
  //cy.contains("Google Search").click();
  cy.wait(2000);
  cy.contains("ভিডিও").click();
});
