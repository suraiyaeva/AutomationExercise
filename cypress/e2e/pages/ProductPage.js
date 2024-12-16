export class ProductPage {
  productSelector = ".shop-menu > .nav > :nth-child(2) > a";
  //categorySelector = ".panel-title a"; // Dynamic categories
  subCategorySelector = "#Men > .panel-body > ul > :nth-child(2) > a";

  categorySelector =
    ":nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa";

  navigateToCategory() {
    cy.get(this.categorySelector).click();
  }

  selectSubCategory() {
    // Locate the sub-category dynamically and click
    cy.get(this.subCategorySelector).click();
  }

  viewProduct() {
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
  }
  productQuantity() {
    cy.get("#quantity") // Replace with the actual selector
      .focus() // Focus on the input field
      .type("{uparrow}");
  }
  addToCart() {
    cy.get(":nth-child(5) > .btn").click();
    cy.get(".modal-footer > .btn").click();
  }
  proceedToCheckout() {
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
    cy.get(".col-sm-6 > .btn").click();
    cy.get(".form-control").type("Deliver within 3 days");
    cy.get(":nth-child(7) > .btn").click();

    cy.get('[data-qa="name-on-card"]').type("Siam Jahan");
    cy.get('[data-qa="card-number"]').type("1234");
    cy.get('[data-qa="cvc"]').type("311");
    cy.get('[data-qa="expiry-month"]').type("December");
    cy.get('[data-qa="expiry-year"]').type("2026");
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.visit("https://automationexercise.com/contact_us");
  }
}
