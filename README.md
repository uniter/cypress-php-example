# Cypress PHP example

An example of how to use Uniter to write [Cypress](https://www.cypress.io/) specs in PHP.

## Demo
![Demo of Cypress running PHP specs with Uniter](https://phptojs.com/cypress-php-example/img/cypress_php.gif)

## Usage
```shell
$ git clone https://github.com/uniter/cypress-php-example.git
$ npm install
$ composer install
$ npm start
```

## How does it work?
It uses the [Webpack loader from Uniter][] to transpile your PHP specs into JavaScript.

Source maps are supported - try opening your browser's developer tools, search for your
PHP spec file by name and stick a breakpoint in there somewhere!

Note that Uniter's `stackCleaning` feature has been enabled for this demo
(see `uniter.config.js`), so you should see cleaner stack traces (with frames that point
into Uniter's internals removed).

[Webpack loader from Uniter]: https://github.com/uniter/loader
