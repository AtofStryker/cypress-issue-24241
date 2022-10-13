describe('24236', () => {
  it('.type', () => {
    cy.visit('cypress/fixtures/index.html')
    cy.get('[data-cy="text"]').type('foobar')
  })
})