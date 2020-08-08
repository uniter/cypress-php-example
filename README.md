# Cypress PHP example

An example of how to use Uniter to write Cypress specs in PHP.

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

## Caveats
Stack traces are not yet fixed to remove the frames that point into Uniter.
You should still see the correct path and line if you look up the stack to your .php file, though.

[Webpack loader from Uniter]: https://github.com/uniter/loader
