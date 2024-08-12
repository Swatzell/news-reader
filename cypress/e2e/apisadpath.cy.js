describe('News Reader API - Sad Path', () => {
  it('should display an error message when the API fails', () => {
    cy.intercept('GET', '**/v2/everything?q=bitcoin*', {
      statusCode: 500,
      body: {
        status: "error",
        message: "Internal Server Error"
      }
    }).as('getSearchResults');

    cy.visit('http://localhost:3000/');
    cy.get('input[placeholder="Search for news..."]').type('bitcoin{enter}');
    cy.wait('@getSearchResults');

    cy.on('window:alert', (text) => {
      expect(text).to.contains('There was an error fetching the articles. Please try again.');
    });
  });
});