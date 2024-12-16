import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { ContactUsPage } from "../pages/ContactUsPage";

describe("UI Testing", () => {
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const contactPage = new ContactUsPage();

  const user = {
    fname: "Siam",
    sname: "Jahan",
    email: "aminkhan44@example.com",
    password: "2018331044",
    dob: "6/April/2000",
    company: "tekarsh",
    address: "Mirpur, DOHS",
    address2: "Mirpur-1",
    country: "India",
    statename: "Delhi",
    city: "Delhi",
    zipcode: "1205",
    mobile: "01749114609",
    comment: "Deliver within 3 days",
  };

  it("Visit the Login Page and Register", () => {
    loginPage.visit();
    loginPage.fillPersonalInformation(user);
    loginPage.fillAddressInformation(user);
  });

  it("Select Product Category", () => {
    loginPage.login(user.email, user.password);
    // Navigate to Men > Jeans
    productPage.navigateToCategory();
    productPage.selectSubCategory();
    productPage.viewProduct();
    productPage.productQuantity();
    productPage.addToCart();
    productPage.proceedToCheckout();
  });

  it("Contact Us Form", () => {
    //loginPage.login(user.email, user.password);
    contactPage.navigateToContactPage();
    contactPage.FormSubmission(user.fname, user.email);
  });
});
