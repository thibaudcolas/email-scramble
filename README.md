email-scramble
==============

[![npm](https://img.shields.io/npm/v/email-scramble.svg?style=flat-square)](https://www.npmjs.com/package/email-scramble) [![Bower](https://img.shields.io/bower/v/email-scramble.svg?style=flat-square)](http://bower.io/search/?q=email-scramble) [![Build Status](https://img.shields.io/travis/ThibWeb/email-scramble.svg?style=flat-square)](https://travis-ci.org/ThibWeb/email-scramble) [![devDependency Status](https://img.shields.io/david/dev/ThibWeb/email-scramble.svg?style=flat-square)](https://david-dm.org/ThibWeb/email-scramble#info=devDependencies) [![Code Climate](https://img.shields.io/codeclimate/github/ThibWeb/email-scramble.svg?style=flat-square)](https://codeclimate.com/github/ThibWeb/email-scramble) [![Test Coverage](https://img.shields.io/codeclimate/coverage/github/ThibWeb/email-scramble.svg?style=flat-square)](https://codeclimate.com/github/ThibWeb/email-scramble)

Scrambles email addresses to hide them from bots. This library can be used server-side with Node/io.js or on the front-end.

Have a look at [the examples](https://rawgit.com/ThibWeb/email-scramble/master/examples/index.html).

If you'd like to know more about obfuscation techniques and their success ratio, [here's a great blog post on the subject](http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/).

## Getting Started

email-scramble uses a simple ROT transformation. The default rotation is ROT-18, which means that letters will be rotated by 13 and numbers by 5.

~~~javascript
  var encodedEmail = emailScramble.encode('mail@example.com');
  var decodedMail = emailScramble.decode(encodedMail);

  // You can also pick any other flavor of ROT:
  function myROT(str) {
    return emailScramble.rot(str, 8, 3);
  }
~~~

Here's a real-world example:

~~~javascript
  // <a id="scrambled" href="znvygb:znvy@rknzcyr.pbz">Send me an email!</a>
  var link = document.getElementById('scrambled');
  link.href = emailScramble.decode(link.href);
~~~

### Download & import

email-scramble is available on [npm](https://www.npmjs.com/package/email-scramble) and [bower](http://bower.io/search/?q=email-scramble), or you can [download a ZIP](https://github.com/ThibWeb/email-scramble/releases)

~~~
$ npm install --save email-scramble
$ bower install --save email-scramble
~~~

This library can be used as a Node/io.js/Browserify CommonJS-like module, a RequireJS AMD module or a global:

~~~javascript
    // The CommonJS way.
    var emailScramble = require('email-scramble');

    // Require email-scramble when defining an AMD module.
    define('mypackage', ['email-scramble'], function (emailScramble) {
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
~~~

## Built with

- https://github.com/mathiasbynens/rot
- https://github.com/umdjs/umd

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
