describe('Tests for Jest Preview', () => {
  it('Check internal pages are present, links and buttons work as expected', () => {
    cy.visit('https://www.jest-preview.com/');
    cy.contains('h1', 'Jest Preview');

    // Check CTA Get Started should direct users to Docs page
    cy.get('.button--secondary').click();
    cy.url().should('contain', 'docs/getting-started/intro');
    cy.contains('h1', 'Introduction');

    // Check Docs page is present
    cy.contains('Docs').click();
    cy.url().should('contain', 'docs/getting-started/intro');
    cy.contains('h1', 'Introduction');

    // Check Blog page is present
    cy.contains('Blog').click();
    cy.url().should('contain', '/blog');

    // Check API page is present
    cy.contains('API').click();
    cy.url().should('contain', '/api');
    cy.contains('Getting Started');

    // Check Demo link is correct
    cy.contains('Demo')
    .invoke('attr', 'href')
    .should('include','https://stackblitz.com/edit/jest-preview')
  });
});
