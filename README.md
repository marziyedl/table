# Spendit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

## Introduction

This Angular assignment project contains code for a web application built using Angular. The project includes components for a "table" module and is tested using Cypress for end-to-end testing.

## Project Structure

The project structure is organized as follows:
project-root/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── table/
│ │ │ │ ├── table.component.html
│ │ │ │ ├── table.component.ts
│ │ │ │ └── ...
│ │ ├── services/
│ │ │ ├── table-data.service.ts
│ │ │ └── ...
├── cypress/
│ ├── 
│ │ ├── spec.cy.ts
│ │ └── ...
└── ...


- The `src` directory contains the Angular application code.
- Inside `app`, you will find a `components` directory for the "table" module's components and a `services` directory for the data service.
- The `cypress` directory holds your end-to-end test code.

Table Module
The "table" module consists of components and a service for handling data.

Components
table.component.html: The HTML template for the table component.
table.component.ts: The TypeScript code for the table component.
...
Services
table-data.service.ts: The data service responsible for handling data related to the table.
...