describe('News Reader - Article Detail Navigation', () => {
  it('should navigate to the article detail page and display the content', () => {
    cy.intercept('GET', '**/v2/everything?q=bitcoin*', {
      statusCode: 200,
      body: {
        status: "ok",
        totalResults: 1,
        articles: [
          {
            title: "Bitcoin News 1",
            description: "This is the first Bitcoin news",
            urlToImage: "https://example.com/image1.jpg",
            publishedAt: "2024-08-09T12:00:00Z",
            content: "Full content of the first news",
            source: {
              name: "Example Source"
            }
          }
        ]
      }
    }).as('getSearchResults');

    cy.visit('http://localhost:3000/');
    cy.get('input[placeholder="Search for news..."]').type('bitcoin{enter}');
    cy.wait('@getSearchResults');
    cy.contains('Bitcoin News 1').click();
    cy.url().should('include', '/article/0');
    cy.contains('Bitcoin News 1').should('be.visible');
    cy.contains('Full content of the first news').should('be.visible');
    cy.contains('Example Source').should('be.visible');
    cy.contains('Back to Results').should('be.visible');
    cy.contains('Back to Home').should('be.visible');
  });
});