describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("misc"));
  });
  it("correct url and table click", () => {
    cy.get(".misc-table").children().each(element => {
      cy.wrap(element).children().click({multiple:true});
    })
    // within(() => {
    //   cy.contains("Cheryl").click();
    //   cy.contains("Charles").click();
    //   cy.contains("Darryl").click();
    //   cy.contains("Table").click();
    // });
    cy.get("tr").should("have.class", "info")
  });
});
