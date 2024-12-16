import { LoginPage } from "./pages/LoginPage.js";
const loginpage = new LoginPage();

describe("All login Tests", () => {
  it("Login Test 1", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginpage.enterUsername("Admin");
    loginpage.enterPassword("admin123");
    loginpage.clickLogin();
  });

  it("Login Test 2", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginpage.enterUsername("Admin");
    loginpage.enterPassword("admin123");
    loginpage.clickLogin();
  });
});
