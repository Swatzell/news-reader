describe('News Reader Search - Happy Path', () => {
  it('should search for news and display results', () => {
    cy.intercept('GET', '**/v2/everything?q=bitcoin*', {
      statusCode: 200,
      body: {
        status: "ok",
        totalResults: 2,
        articles: [
          {
            title: "Bitcoin News 1",
            description: "This is the first Bitcoin news",
            urlToImage: "https://example.com/image1.jpg",
            publishedAt: "2024-08-09T12:00:00Z",
            content: "Full content of the first news"
          },
          {
            title: "Bitcoin News 2",
            description: "This is the second Bitcoin news",
            urlToImage: "https://example.com/image2.jpg",
            publishedAt: "2024-08-10T12:00:00Z",
            content: "Full content of the second news"
          }
        ]
      }
    }).as('getSearchResults');

    cy.visit('http://localhost:3000/');
    cy.get('input[placeholder="Search for news..."]').type('bitcoin{enter}');
    cy.wait('@getSearchResults');

    cy.contains('Bitcoin News 1').should('be.visible');
    cy.contains('Bitcoin News 2').should('be.visible');
  });
});

describe('News Reader Search - No Results Found', () => {
  it('should display a message when no results are found', () => {
    cy.intercept('GET', '**/v2/everything?q=nonexistent*', {
      statusCode: 200,
      body: {
        status: "ok",
        totalResults: 0,
        articles: []
      }
    }).as('getSearchResults');

    cy.visit('http://localhost:3000/');
    cy.get('input[placeholder="Search for news..."]').type('nonexistent{enter}');
    cy.wait('@getSearchResults');
    cy.contains('No articles found. Please try a different search.').should('be.visible');
  });
});