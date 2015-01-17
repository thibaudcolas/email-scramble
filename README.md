email-scramble
==============

[![npm](https://img.shields.io/npm/v/email-scramble.svg?style=flat-square)](https://www.npmjs.com/package/email-scramble) [![Bower](https://img.shields.io/bower/v/email-scramble.svg?style=flat-square)](http://bower.io/search/?q=email-scramble) [![Build Status](https://img.shields.io/travis/ThibWeb/email-scramble.svg?style=flat-square)](https://travis-ci.org/ThibWeb/email-scramble) [![devDependency Status](https://img.shields.io/david/dev/ThibWeb/email-scramble.svg?style=flat-square)](https://david-dm.org/ThibWeb/email-scramble#info=devDependencies) [![Code Climate](https://img.shields.io/codeclimate/github/ThibWeb/email-scramble.svg?style=flat-square)](https://codeclimate.com/github/ThibWeb/email-scramble) [![Test Coverage](https://img.shields.io/codeclimate/coverage/github/ThibWeb/email-scramble.svg?style=flat-square)](https://codeclimate.com/github/ThibWeb/email-scramble)

Scrambles email addresses to hide them from bots. This library can be used server-side with Node/io.js or on the front-end.

[![NPM](https://nodei.co/npm/email-scramble.png?downloads=true&stars=true)](https://www.npmjs.com/package/email-scramble)

## Getting Started

### Download

email-scramble is available on [npm](https://www.npmjs.com/package/email-scramble) and [bower](http://bower.io/search/?q=email-scramble), or you can [download a ZIP](https://github.com/ThibWeb/email-scramble/releases)

~~~
$ npm install --save email-scramble
$ bower install --save email-scramble
~~~

### Import

This library can be used as a Node/io.js/Browserify CommonJS-like module, a RequireJS AMD module or a global:

~~~javascript
    // The CommonJS way.
    var emailScramble = require('email-scramble');

    // Require email-scramble when defining an AMD module.
    define('mypackage', ['email-scramble'], function () {
      // [...]
    });

    // Global variable.
    var emailScramble = window.emailScramble;
~~~

## Contributing

~~~
$ npm install
$ npm test
$ npm run lint
$ npm start
~~~

## Built with

- https://github.com/mathiasbynens/rot
- https://github.com/umdjs/umd

## TODO

- More tests

## LICENSE (ISC)

Copyright (c) 2015, Thibaud Colas

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
