# Cypress PHP example

An example of how to use Uniter to write Cypress specs in PHP.

## Usage
```shell
$ git clone https://github.com/uniter/cypress-php-example.git
$ npm install
$ composer install
$ npm start
```

## How does it work?
It uses the [Webpack loader from Uniter]() to transpile your PHP specs into JavaScript.

## Caveats
Stack traces are not yet fixed to remove the frames that point into Uniter.
You should still see the correct path and line if you look up the stack to your .php file, though.

[Webpack loader from Uniter]: https://github.com/uniter/loader
