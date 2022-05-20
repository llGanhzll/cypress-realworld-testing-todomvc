describe('React TodoMVC0', () => {
  const TODO_ITEM_ONE = 'Buy Milk';
  const TODO_ITEM_TWO = 'Pay Rent';
  const TODO_ITEM_THREE = 'Pickup Dry Cleaning';

  beforeEach(() => {
    cy.visit("http://localhost:8888")
  })

  it('adds three todos', () => {
    cy.createDefaultTodos()
    cy.get('ul.todo-list > li').should('have.length', 3)
  })

  it('should append new items to the bottom of the list', () => {
    cy.createDefaultTodos()
    
    // to-do 1
    cy.get('ul > li').eq(0).find('label').should('contain', TODO_ITEM_ONE)

    // to-do 2
    cy.get('ul > li').eq(1).find('label').should('contain', TODO_ITEM_TWO)

    // to-do 3
    cy.get('ul > li').eq(2).find('label').should('contain', TODO_ITEM_THREE)

    cy.get('ul.todo-list > li').should('have.length', 3)
    cy.get('span.todo-count').contains('3 items left')
  })

});