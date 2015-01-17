(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define('email-scramble', factory(root));
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.emailScramble = factory(root);
  }
}(this, function (root) {
  'use strict';

  // https://github.com/mathiasbynens/rot
  function rot(string, n) {
    /* jshint ignore:start */
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var regexLowercase = /[a-z]/;
    var regexUppercase = /[A-Z]/;

    if (n == null) {
      // use ROT-13 by default
      n = 13;
    }
    n = Number(n);
    string = String(string);
    if (n == 0) {
      return string;
    }
    if (n < 0) { // decode instead of encode
      n += 26;
    }
    var length = string.length; // note: no need to account for astral symbols
    var index = -1;
    var result = '';
    var character;
    var currentPosition;
    var shiftedPosition;
    while (++index < length) {
      character = string.charAt(index);
      if (regexLowercase.test(character)) {
        currentPosition = lowercase.indexOf(character);
        shiftedPosition = (currentPosition + n) % 26;
        result += lowercase.charAt(shiftedPosition);
      } else if (regexUppercase.test(character)) {
        currentPosition = uppercase.indexOf(character);
        shiftedPosition = (currentPosition + n) % 26;
        result += uppercase.charAt(shiftedPosition);
      } else {
        result += character;
      }
    }
    return result;
    /* jshint ignore:end */
  }

  return {
    rot: rot
  };
}));
