describe("my-page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("sayfa yükleniyor mu?", () => {
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("dil değiştirme butonu çalışıyor mu?", () => {
    cy.get('[data-cy="language"]').should("contain.text", "SWITCH TO");
    cy.get('[data-cy="language"]').click();
  });

  it("tema değiştirme butonu çalışıyor mu?", () => {
    cy.get('[data-cy="theme"]').click({ force: true });
  });

  it("linklere tıklanıyor mu?", () => {
    cy.get('a[data-cy="link"]').each(($link) => {
      const href = $link.attr("href");
      cy.visit(href, { failOnStatusCode: false });
    });
  });
});
