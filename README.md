# Cypress-Automation

Este proyecto es un ejemplo de cómo automatizar pruebas e2e web y APIs usando Cypress.

## Pre-requisitos

Para ejecutar la automatización, necesitas tener los siguientes pre-requisitos instalados:

- Node.js >= 16.0.0
- NPM >= 7.0.0
- Git

## Instalación

Para instalar Cypress, puedes usar el siguiente comando:

```bash
npm install cypress
```
Una vez que Cypress esté instalado, puedes iniciarlo con el siguiente comando:

```bash
npx cypress open
```

## Descarga del proyecto
Para descargar el proyecto de GitHub, puedes usar el siguiente comando:
```bash
git clone https://github.com/byronlml/Cypress-Automation.git
```

## Ejecución de las pruebas
Para ejecutar las pruebas, puedes usar el siguiente comando:
```bash
npx cypress run

```

## Integración continua con GitHub Actions
Para configurar la integración continua con GitHub Actions, puedes usar el siguiente archivo .github/workflows/cy.yml.

Usa el código con precaución. [Más información](enlace a más información)

Este archivo configurará un flujo de trabajo que se ejecutará cada vez que se realice un envío a la rama principal. El flujo de trabajo instalará Cypress, ejecutará las pruebas y generará un informe de resultados.

Para obtener más información sobre la integración continua con GitHub Actions, consulta la documentación de GitHub.
