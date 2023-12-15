describe("API jsonplaceholder", () => {

    const url = 'https://jsonplaceholder.typicode.com';
    const dataPath = "cypress/fixtures/create_user.json";
  
    it("GET devuelve una lista de APIs", () => {
      // Inicializa la API
      cy.request(url + "/users").then((res) => {
        const data = JSON.stringify(res.body);

        // Accede al primer objeto del array
        const user = JSON.parse(data)[0];

        // Comprueba que el nombre sea "Leanne Graham"
        cy.expect(user.name).to.equal("Leanne Graham");
        // Verifica que la respuesta tenga éxito
        cy.expect(res.status).to.eq(200);
  
      });
    });

    it("crea un nuevo post", () => {
        // Obtiene los datos del JSON
        cy.readFile(dataPath).then((data) => {
          // Realiza la petición POST
          cy.request({
            method: 'POST',
            url: url + "/users", 
            body: data,
          }).then((res) => {
            const test = JSON.stringify(res.body);
            cy.log(test)
            // Verifica que la respuesta tenga éxito
            cy.expect(res.status).to.eq(201);

          });
        });
      });
  });