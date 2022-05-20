describe('React TodoMVC0', () => {

  const TODO_ITEM_ONE = 'Buy Milk';
  const TODO_ITEM_TWO = 'Pay Rent';
  const TODO_ITEM_THREE = 'Pickup Dry Cleaning';
  const URL_CLASS = '.new-todo';

  beforeEach(() => {
    cy.visit("http://localhost:8888")
  })

  it('adds a single todo', () => {
    cy.get(`${URL_CLASS}`).type(`${TODO_ITEM_ONE}{enter}`)
    cy.get('ul.todo-list > li').should('have.length', 1)
  })

  it('adds three todos', () => {
    cy.get(`${URL_CLASS}`).type(`${TODO_ITEM_ONE}{enter}`)
    cy.get(`${URL_CLASS}`).type(`${TODO_ITEM_TWO}{enter}`)
    cy.get(`${URL_CLASS}`).type(`${TODO_ITEM_THREE}{enter}`)
    cy.get('ul.todo-list > li').should('have.length', 3)
    cy.get('ul > li').eq(0).find('label').should('contain', TODO_ITEM_ONE)
    cy.get('ul > li').eq(1).find('label').should('contain', TODO_ITEM_TWO)
    cy.get('ul > li').eq(2).find('label').should('contain', TODO_ITEM_THREE)
  })

});