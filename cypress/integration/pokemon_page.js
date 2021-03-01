describe('CharizardEntry', function () {
  it('Entry page contains correct values', function() {
    cy.visit('http://localhost:5000/');
    cy.contains('charizard').click()
    cy.contains('solar power');
  })
})