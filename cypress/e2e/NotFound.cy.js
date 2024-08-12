describe('News Reader - 404 Not Found', () => {
  it('should display the 404 Not Found page for an invalid URL', () => {
    cy.visit('http://localhost:3000/fart');

    cy.contains('404 - Page Not Found').should('be.visible');
    cy.contains('The page you are looking for does not exist.').should('be.visible');
    cy.contains('Go Back to Home').click();
  });
});