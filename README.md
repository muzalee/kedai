# Kedai

API collaborated with [ainnaziha - kedai api](https://github.com/ainnaziha/kedai-api) using .net core 6.\
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Project Details

- login, logout
- authentication to API using JWT bearer token
- list of products
- add to cart, cart list, empty cart, edit cart
- checkout, payment method with Stripe API
- list of orders

Some of the screenshots:
![Home](https://github.com/muzalee/kedai/src/assets/screenshot/home.png)

![Cart](https://github.com/muzalee/kedai/src/assets/screenshot/cart.png)
Post delete confirmation, data in the table will be updated after delete.

![Checkout](https://github.com/muzalee/kedai/src/assets/screenshot/checkout.png)

## Directory
use tree or tree /F command to generate
.
└───src
    ├───app
    │   ├───components
    │   │   ├───cart
    │   │   ├───confirmation-dialog
    │   │   ├───error-dialog       
    │   │   ├───order
    │   │   └───product
    │   ├───layout
    │   │   ├───body
    │   │   ├───header
    │   │   └───main-header
    │   ├───models
    │   ├───pages
    │   │   ├───404
    │   │   ├───auth
    │   │   │   ├───login
    │   │   │   └───register
    │   │   ├───cart
    │   │   ├───checkout
    │   │   ├───home
    │   │   ├───order
    │   │   └───payment
    │   │       ├───payment-error
    │   │       └───payment-success
    │   └───services
    │       ├───auth
    │       ├───cart
    │       ├───category
    │       ├───checkout
    │       ├───custom-dialog
    │       ├───http
    │       ├───order
    │       ├───product
    │       └───stripe
    └───environments

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