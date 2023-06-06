describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });
  it("test initial web app. (Add and delete all)",()=>{
    cy.addTodo("Item1");
    cy.addTodo("Item2");
    cy.addTodo("Item3");
    cy.addTodo("Item4");
    cy.get('[for="toggle-all"]').click();
    cy.get(".footer > .todo-button").click();
    cy.validate(0);
  })
  it("add item", () => {
    cy.addTodo("todo Item");
    cy.validate(3);
  });
  it("check dog", () => {
    cy.deleteAll();
    cy.addTodo("Walk the dog");
  });
  it("assert 3 items", () => {
    cy.addTodo("todo Item");
    cy.validate(3);
  });
  it("show all / active / completed", () => {
    cy.deleteAll();
    cy.addTodo("Item1");
    cy.addTodo("Item2");
    cy.addTodo("Item3");
    cy.checkItem("Item1");
    cy.checkItem("Item2");
    cy.contains("Active").click()
    cy.validate(1);
    cy.contains("Completed").click()
    cy.validate(2);
  });
  it("clear completed", () => {
    cy.deleteAll();
    cy.addTodo("Item1");
    cy.addTodo("Item2");
    cy.checkItem("Item1");
    cy.get(".footer > .todo-button").click();
  });
  it("check all", () => {
    cy.deleteAll();
    cy.addTodo("Item1");
    cy.addTodo("Item2");
    cy.addTodo("Item3");
    cy.addTodo("Item4");
    cy.get('[for="toggle-all"]').click();
    cy.get(".footer > .todo-button").click();
    cy.validate(0);
  });
});
