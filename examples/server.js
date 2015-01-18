'use strict';

var emailScramble = require('email-scramble');

var mail = 'mail@example.com';

console.log(mail, 'ROT-18', emailScramble.encode(mail));
