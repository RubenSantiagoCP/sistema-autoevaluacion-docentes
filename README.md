# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# Backend

This backend project is built using [Express](https://expressjs.com/), [Sequelize](https://sequelize.org/), and TypeScript.

## Development Server

To run the development server, use the command `nodemon .\dist\index.js`. The server will start, and you can navigate to `http://localhost:3000/` (or another port configured in your server) to interact with the API. The server will automatically reload if there are changes in the source files due to the `nodemon` watch functionality.

## Code Structure

- The backend code is written in TypeScript and can be found in the `src` directory.
- Controllers, models, routes, and other functionalities are organized within their respective directories (e.g., `controllers`, `models`, `routes`).
- The `dist` directory contains the compiled JavaScript code that is executed by Node.js.

## Building

To build the project, use the command `tsc`. This command compiles the TypeScript code into JavaScript, and the resulting files are stored in the `dist/` directory.

## Database

The project uses Sequelize as the ORM for interacting with the database. The database configurations and models are defined in the `config` and `models` directories, respectively.

## Running TypeScript Watch

To continuously compile TypeScript code as you make changes, use the command `tsc --watch`. This command watches for changes in the source files and automatically recompiles them.

## Further Assistance

If you need more help or information about the project's structure, dependencies, or TypeScript configuration, refer to the TypeScript documentation and Sequelize documentation. Additionally, running `tsc --help` or checking out the TypeScript Configuration file (`tsconfig.json`) might provide useful insights.

