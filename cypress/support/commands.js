// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('addTodo', (todo) =>{
    cy.get('[data-test="new-todo"]').type(todo+"{enter}")
})

Cypress.Commands.add('validate', (number) =>{
    cy.get('.view').should('have.length',number)
})

Cypress.Commands.add('deleteAll', ()=>{
    cy.get('.destroy.todo-button').eq(0).click({force:true})
    cy.get('.destroy.todo-button').eq(0).click({force:true})
})

Cypress.Commands.add('checkItem', (todo)=>{
    cy.contains(todo).parent().find("input[type=checkbox]").check()
})