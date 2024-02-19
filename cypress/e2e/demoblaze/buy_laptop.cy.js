import { login, logout  } from '../../support/base';
import { getAllLocators } from '../../support/locator_buy_laptop';

// Obtiene todos los localizadores de la compra de celulares
const allLocators = getAllLocators();

describe("Test buy a laptop", () => {
  beforeEach(() => {
    login(); 
  });

 // Prueba individual para comprar un portatil
 it('Buy a laptop', () => {


    // Abre la categoría de celulares
    cy.get(allLocators.laptopCategoryButton).click(); // Clica el botón "Categorias -> portatil"

    // Selecciona el segundo portatil
    cy.get(allLocators.firstLaptopLink).should('be.visible').click(); // Clica el segundo portatil de la lista

    // Agrega el celular al carrito
    cy.get(allLocators.addToCartButton).should('be.visible').click(); // Clica el botón "Añadir al carrito"

    // Navega al carrito de compras
    cy.get(allLocators.cartLink).click(); // Clica el enlace "Carrito"

    // Procede al proceso de compra
    cy.get(allLocators.checkoutButton).should('be.visible').click(); // Clica el botón "Checkout"

    // Lee los datos de compra del archivo "cypress/fixtures/buy_laptop.json"
    cy.readFile('cypress/fixtures/buy_laptop.json').then(data => {

      // Extrae los datos de cliente y tarjeta de crédito del archivo
      const name = data.customer.name;
      const country = data.customer.country;
      const city = data.customer.city;
      const card = data.card.number;
      const month = data.card.expiryMonth;
      const year = data.card.expiryYear;
      const total = data.assert.total;

      // Rellena el formulario de compra con los datos extraídos
      cy.get(allLocators.nameInput).type(name); // Escribe el nombre del cliente
      cy.get(allLocators.countryInput).type(country); // Escribe el país del cliente
      cy.get(allLocators.cityInput).type(city); // Escribe la ciudad del cliente
      cy.get(allLocators.cardNumberInput).type(card); // Escribe el número de la tarjeta
      cy.get(allLocators.expiryMonthInput).type(month); // Escribe el mes de expiración
      cy.get(allLocators.expiryYearInput).type(year); // Escribe el año de expiración
      cy.get(allLocators.priceValidation).contains(total); // Verifica el precio total

    });

    // Realiza el pedido
    cy.get(allLocators.purchaseButton).click(); // Clica el botón "Confirmar compra"

    // Espera 500 milisegundos para que se procese el pedido
    cy.wait(500);

    // Verifica el mensaje de confirmación de compra
    cy.get(allLocators.purchaseSuccessMessage).contains("Thank you for your purchase!"); // Comprueba que aparezca el mensaje "Gracias por tu compra"

    // Clica el botón de confirmación para cerrar el popup
    cy.get(allLocators.confirmationButton).click(); // Clica el botón "Aceptar"

    // Verifica que se haya regresado a la página principal
    cy.get(allLocators.homePageLink).contains("PRODUCT STORE"); // Comprueba que aparezca el enlace "PRODUCT STORE"

  });

  after(() => {
    logout();
  });
});