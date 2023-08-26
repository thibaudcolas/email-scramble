# [email-scramble](https://www.npmjs.com/package/email-scramble)

> Encode/decode email addresses and phone numbers with ROT-18 to hide them from bots. Can be used server-side with Node.js or in a browser.

> If you'd like to know more about obfuscation techniques and their success ratio, [here is a great blog post on the subject](http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/).

## Getting Started

`email-scramble` uses a simple [ROT](https://en.wikipedia.org/wiki/ROT13) transformation. The default rotation is ROT-18: letters will be rotated by 13 and numbers by 5.

```js
var encodedEmail = emailScramble.encode("mail@example.com");
var decodedMail = emailScramble.decode(encodedMail);

// You can also pick any other flavor of ROT:
function myROT(str) {
  // Here letters are obfuscated with ROT-13 and numbers are kept clear.
  return emailScramble.rot(13, 0, str);
}

// Functional-programming partial application style:
var myRot = emailScramble.rot.bind(emailScramble, 13, 0);
```

Here is a real-world example:

```js
// <a href="znvygb:znvy@rknzcyr.pbz" data-email-scramble>Send me an email!</a>
var links = document.querySelectorAll("[data-email-scramble]");

links.forEach(function decodeLink(link) {
  link.href = emailScramble.decode(link.href);
});
```

### Download & import

```sh
npm install --save email-scramble
```

```js
// ES6+
import emailScramble from "email-scramble";

// The CommonJS way.
var emailScramble = require("email-scramble");
```
