describe('TableComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should interact with the tableComponent', () => {
    cy.visit('/');
    cy.contains('Next');
    cy.contains('Previous');
    const tableSelector = 'table';
    cy.get(tableSelector).should('exist');
  });

  it('should select table rows  ', () => {
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });
    cy.contains('Selected Rows: 1');
  });

  it('should interact with the TablePaginationComponent', () => {
    cy.get('select').select('10').should('have.value', '10');
  });
});
