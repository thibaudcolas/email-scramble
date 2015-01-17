(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('email-scramble', factory(root));
  } else if (typeof exports === 'object') {
    module.exports = factory(root);
  } else {
    root.emailScramble = factory(root);
  }
}(window || this, function (root) {
  'use strict';

  return {};
}));
