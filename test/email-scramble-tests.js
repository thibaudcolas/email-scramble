'use strict';

var expect = require('chai').expect;
var emailScramble = require('../index');

var testString = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~';

var rot = emailScramble.rot;
var encode = emailScramble.encode;
var decode = emailScramble.decode;

describe('email-scramble', function() {
  it('is available as a Node module', function() {
    expect(emailScramble).to.be.an('object');
  });

  it('exposes a small API', function() {
    expect(emailScramble).to.respondTo('rot');
    expect(emailScramble).to.respondTo('encode');
    expect(emailScramble).to.respondTo('decode');
  });

  describe('ROT implementation', function() {
    it('ROT-0', function() {
      expect(rot(0, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~');
    });

    it('ROT-1', function() {
      expect(rot(1, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@BCDEFGHIJKLMNOPQRSTUVWXYZA[]^_`bcdefghijklmnopqrstuvwxyza{|}~');
    });

    it('ROT-2', function() {
      expect(rot(2, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@CDEFGHIJKLMNOPQRSTUVWXYZAB[]^_`cdefghijklmnopqrstuvwxyzab{|}~');
    });

    it('ROT-3', function() {
      expect(rot(3, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@DEFGHIJKLMNOPQRSTUVWXYZABC[]^_`defghijklmnopqrstuvwxyzabc{|}~');
    });

    it('ROT-4', function() {
      expect(rot(4, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@EFGHIJKLMNOPQRSTUVWXYZABCD[]^_`efghijklmnopqrstuvwxyzabcd{|}~');
    });

    it('ROT-5', function() {
      expect(rot(5, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@FGHIJKLMNOPQRSTUVWXYZABCDE[]^_`fghijklmnopqrstuvwxyzabcde{|}~');
    });

    it('ROT-6', function() {
      expect(rot(6, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@GHIJKLMNOPQRSTUVWXYZABCDEF[]^_`ghijklmnopqrstuvwxyzabcdef{|}~');
    });

    it('ROT-7', function() {
      expect(rot(7, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@HIJKLMNOPQRSTUVWXYZABCDEFG[]^_`hijklmnopqrstuvwxyzabcdefg{|}~');
    });

    it('ROT-8', function() {
      expect(rot(8, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@IJKLMNOPQRSTUVWXYZABCDEFGH[]^_`ijklmnopqrstuvwxyzabcdefgh{|}~');
    });

    it('ROT-9', function() {
      expect(rot(9, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@JKLMNOPQRSTUVWXYZABCDEFGHI[]^_`jklmnopqrstuvwxyzabcdefghi{|}~');
    });

    it('ROT-10', function() {
      expect(rot(10, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@KLMNOPQRSTUVWXYZABCDEFGHIJ[]^_`klmnopqrstuvwxyzabcdefghij{|}~');
    });

    it('ROT-11', function() {
      expect(rot(11, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@LMNOPQRSTUVWXYZABCDEFGHIJK[]^_`lmnopqrstuvwxyzabcdefghijk{|}~');
    });

    it('ROT-12', function() {
      expect(rot(12, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@MNOPQRSTUVWXYZABCDEFGHIJKL[]^_`mnopqrstuvwxyzabcdefghijkl{|}~');
    });

    it('ROT-13', function() {
      expect(rot(13, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@NOPQRSTUVWXYZABCDEFGHIJKLM[]^_`nopqrstuvwxyzabcdefghijklm{|}~');
    });

    it('ROT-14', function() {
      expect(rot(14, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@OPQRSTUVWXYZABCDEFGHIJKLMN[]^_`opqrstuvwxyzabcdefghijklmn{|}~');
    });

    it('ROT-15', function() {
      expect(rot(15, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@PQRSTUVWXYZABCDEFGHIJKLMNO[]^_`pqrstuvwxyzabcdefghijklmno{|}~');
    });

    it('ROT-16', function() {
      expect(rot(16, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@QRSTUVWXYZABCDEFGHIJKLMNOP[]^_`qrstuvwxyzabcdefghijklmnop{|}~');
    });

    it('ROT-17', function() {
      expect(rot(17, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@RSTUVWXYZABCDEFGHIJKLMNOPQ[]^_`rstuvwxyzabcdefghijklmnopq{|}~');
    });

    it('ROT-18', function() {
      expect(rot(18, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@STUVWXYZABCDEFGHIJKLMNOPQR[]^_`stuvwxyzabcdefghijklmnopqr{|}~');
    });

    it('ROT-19', function() {
      expect(rot(19, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@TUVWXYZABCDEFGHIJKLMNOPQRS[]^_`tuvwxyzabcdefghijklmnopqrs{|}~');
    });

    it('ROT-20', function() {
      expect(rot(20, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@UVWXYZABCDEFGHIJKLMNOPQRST[]^_`uvwxyzabcdefghijklmnopqrst{|}~');
    });

    it('ROT-21', function() {
      expect(rot(21, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@VWXYZABCDEFGHIJKLMNOPQRSTU[]^_`vwxyzabcdefghijklmnopqrstu{|}~');
    });

    it('ROT-22', function() {
      expect(rot(22, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@WXYZABCDEFGHIJKLMNOPQRSTUV[]^_`wxyzabcdefghijklmnopqrstuv{|}~');
    });

    it('ROT-23', function() {
      expect(rot(23, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@XYZABCDEFGHIJKLMNOPQRSTUVW[]^_`xyzabcdefghijklmnopqrstuvw{|}~');
    });

    it('ROT-24', function() {
      expect(rot(24, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@YZABCDEFGHIJKLMNOPQRSTUVWX[]^_`yzabcdefghijklmnopqrstuvwx{|}~');
    });

    it('ROT-25', function() {
      expect(rot(25, 0, testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@ZABCDEFGHIJKLMNOPQRSTUVWXY[]^_`zabcdefghijklmnopqrstuvwxy{|}~');
    });

    it('ROT-26 == ROT-0', function() {
      expect(rot(26, 0, testString)).to.equal(rot(0, 0, testString));
    });
  });

  describe('encode & decode', function() {
    it('encodes by using the ROT implementation', function() {
      expect(encode(testString)).to.equal(rot(13, 5, testString));
    });

    it('decodes by using the ROT implementation', function() {
      expect(decode(testString)).to.equal(rot(13, 5, testString));
    });

    it('can be chained together', function() {
      expect(decode(encode(testString))).to.equal(testString);
      expect(encode(decode(testString))).to.equal(testString);
    });
  });

  describe('emails', function() {
    it('can be encoded with encode', function() {
      expect(encode('mail@example.com')).to.equal(('znvy@rknzcyr.pbz'));
      expect(encode('testmail@example.com')).to.equal(('grfgznvy@rknzcyr.pbz'));
      expect(encode('mail@testexample.com')).to.equal(('znvy@grfgrknzcyr.pbz'));
      expect(encode('mail@example.test')).to.equal(('znvy@rknzcyr.grfg'));
      expect(encode('mail+ref@example.com')).to.equal(('znvy+ers@rknzcyr.pbz'));
    });

    it('can be decoded with decode', function() {
      expect(decode('znvy@rknzcyr.pbz')).to.equal(('mail@example.com'));
      expect(decode('grfgznvy@rknzcyr.pbz')).to.equal(('testmail@example.com'));
      expect(decode('znvy@grfgrknzcyr.pbz')).to.equal(('mail@testexample.com'));
      expect(decode('znvy@rknzcyr.grfg')).to.equal(('mail@example.test'));
      expect(decode('znvy+ers@rknzcyr.pbz')).to.equal(('mail+ref@example.com'));
    });
  });

});
