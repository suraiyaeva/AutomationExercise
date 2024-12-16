describe("API Testing", () => {
  const brandListEndpoint = "https://automationexercise.com/api/brandsList";

  it("Validate Brand List Response", () => {
    cy.request({
      method: "GET",
      url: brandListEndpoint,
    }).then((response) => {
      expect(response.status).to.equal(200);
      const brands = response.body;
      //validate presence of brands
      expect(brands).to.contain("Polo");
      expect(brands).to.contain("Babyhug");
      expect(brands).to.contain("Biba");
      //validate absence of brands
      expect(brands).to.not.contain("Heineken");
      expect(brands).to.not.contain("BMW");
      expect(brands).to.not.contain("Razor");
    });
  });

  const loginEndpoint = "https://automationexercise.com/api/verifyLogin";

  it("Verify Login Response", () => {
    cy.request({
      method: "POST",
      url: loginEndpoint,
      form: true,
      body: {
        email: "farjua44@example.com",
        password: "2018331044",
      },
    }).then((response) => {
      // Assertions
      expect(response.status).to.eq(200);
      const responseBody = JSON.parse(response.body);
      expect(responseBody.message).to.eq("User exists!");
    });
  });
});
