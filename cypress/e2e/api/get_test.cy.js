describe("API pública", () => {

  const url = 'https://randomuser.me'

  it("devuelve una lista de APIs", () => {
    // Inicializa la API
    cy.request(url + "/api/").then((res) => {
      const data = JSON.stringify(res.body);

    // Extrae el objeto de resultados
      const results = JSON.parse(data).results[0];

    // Comprueba que el género sea "male"
      cy.expect(results.gender).oneOf("male", "female");
      // Verifica que la respuesta tenga éxito
      cy.expect(res.status).to.eq(200);

    });

  });
});
  