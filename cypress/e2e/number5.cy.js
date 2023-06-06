describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("coupon"));
  });
  it("submit coupon", () => {
    cy.get(".action-form").find('[type="text"]').type("HALFOFF");
    cy.get(".action-form")
      .submit()
      .next()
      .should("contain", "Your form has been submitted!");
  });
});
