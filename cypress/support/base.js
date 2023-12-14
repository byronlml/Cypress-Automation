// Importa los localizadores necesarios desde el archivo locator_login.
import { loginLink, usernameInput, passwordInput, loginButton } from '../support/locator_login';

// Define una función llamada "login" sin argumentos.
const login = () => {
  // Abre el sitio web de demoblaze.com
  cy.visit('https://www.demoblaze.com/');

  // Clica el enlace de login para abrir el formulario.
  cy.get(loginLink).click();

  // Espera 500 milisegundos para que el formulario cargue.
  cy.wait(500);

  // Carga los datos de usuario y contraseña desde "cypress/fixtures/login_data.json".
  cy.readFile('cypress/fixtures/login_data.json').then(data => {
    // Obtiene el nombre de usuario y la contraseña del archivo.
    const username = data.username;
    const password = data.password;

    // Rellena los campos de usuario y contraseña.
    cy.get(usernameInput).type(username);
    cy.get(passwordInput).type(password);
  });

  // Clica el botón de login para iniciar sesión.
  cy.get(loginButton).click();
};

// Define una función llamada "logout" sin argumentos.
const logout = () => {
  // Clica el botón de logout para cerrar sesión.
  cy.get('#logout2').click();

  // Espera 500 milisegundos para que la sesión se cierre.
  cy.wait(500);

  // Verifica que el texto "Log in" aparezca en el elemento con ID "login2" para confirmar el cierre de sesión.
  cy.get('#login2').contains("Log in");
};
// Exporta las funciones "login" y "logout" para su uso en otros archivos de prueba.
export { login };
export { logout };