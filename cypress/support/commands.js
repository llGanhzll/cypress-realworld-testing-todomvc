Cypress.Commands.add('createDefaultTodos', () => {
  const TODO_ITEM_ONE = 'Buy Milk';
  const TODO_ITEM_TWO = 'Pay Rent';
  const TODO_ITEM_THREE = 'Pickup Dry Cleaning';
  const URL_CLASS = '.new-todo';

  cy.get(`${URL_CLASS}`)
    .type(`${TODO_ITEM_ONE}{enter}`)
    .type(`${TODO_ITEM_TWO}{enter}`)
    .type(`${TODO_ITEM_THREE}{enter}`)
})