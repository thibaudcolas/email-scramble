'use strict';

var emailScramble = require('email-scramble');
var encode = emailScramble.encoder(5);

var mail = 'mail@example.com';

console.log(mail, 'ROT-5', encode(mail));
