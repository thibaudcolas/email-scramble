'use strict';

var expect = require('chai').expect;
var emailScramble = require('../email-scramble');

describe('email-scramble', function() {
  var testString = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~';

  var rot = emailScramble._rot;
  var encoder = emailScramble.encoder;
  var decoder = emailScramble.decoder;

  it('is available as a Node module', function() {
    expect(emailScramble).to.exist();
    expect(emailScramble).to.be.an('object');
  });

  it('exposes a small API', function() {
    expect(emailScramble).to.respondTo('_rot');
    expect(emailScramble).to.respondTo('encoder');
    expect(emailScramble).to.respondTo('decoder');
  });

  describe('ROT implementation', function() {
    it('ROT-0', function() {
      expect(rot(testString, 0)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~');
    });

    it('ROT-1', function() {
      expect(rot(testString, 1)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@BCDEFGHIJKLMNOPQRSTUVWXYZA[]^_`bcdefghijklmnopqrstuvwxyza{|}~');
    });

    it('ROT-2', function() {
      expect(rot(testString, 2)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@CDEFGHIJKLMNOPQRSTUVWXYZAB[]^_`cdefghijklmnopqrstuvwxyzab{|}~');
    });

    it('ROT-3', function() {
      expect(rot(testString, 3)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@DEFGHIJKLMNOPQRSTUVWXYZABC[]^_`defghijklmnopqrstuvwxyzabc{|}~');
    });

    it('ROT-4', function() {
      expect(rot(testString, 4)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@EFGHIJKLMNOPQRSTUVWXYZABCD[]^_`efghijklmnopqrstuvwxyzabcd{|}~');
    });

    it('ROT-4', function() {
      expect(rot(testString, 4)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@EFGHIJKLMNOPQRSTUVWXYZABCD[]^_`efghijklmnopqrstuvwxyzabcd{|}~');
    });

    it('ROT-5', function() {
      expect(rot(testString, 5)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@FGHIJKLMNOPQRSTUVWXYZABCDE[]^_`fghijklmnopqrstuvwxyzabcde{|}~');
    });

    it('ROT-5: decode', function() {
      expect(rot(' !"#$%&\'()*+,-./0123456789:;<=>?@FGHIJKLMNOPQRSTUVWXYZABCDE[]^_`fghijklmnopqrstuvwxyzabcde{|}~', -5)).to.equal(testString);
    });

    it('ROT-5: decode', function() {
      expect(rot(' !"#$%&\'()*+,-./0123456789:;<=>?@FGHIJKLMNOPQRSTUVWXYZABCDE[]^_`fghijklmnopqrstuvwxyzabcde{|}~', 26 - 5)).to.equal(testString);
    });

    it('ROT-6', function() {
      expect(rot(testString, 6)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@GHIJKLMNOPQRSTUVWXYZABCDEF[]^_`ghijklmnopqrstuvwxyzabcdef{|}~');
    });

    it('ROT-7', function() {
      expect(rot(testString, 7)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@HIJKLMNOPQRSTUVWXYZABCDEFG[]^_`hijklmnopqrstuvwxyzabcdefg{|}~');
    });

    it('ROT-8', function() {
      expect(rot(testString, 8)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@IJKLMNOPQRSTUVWXYZABCDEFGH[]^_`ijklmnopqrstuvwxyzabcdefgh{|}~');
    });

    it('ROT-9', function() {
      expect(rot(testString, 9)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@JKLMNOPQRSTUVWXYZABCDEFGHI[]^_`jklmnopqrstuvwxyzabcdefghi{|}~');
    });

    it('ROT-10', function() {
      expect(rot(testString, 10)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@KLMNOPQRSTUVWXYZABCDEFGHIJ[]^_`klmnopqrstuvwxyzabcdefghij{|}~');
    });

    it('ROT-11', function() {
      expect(rot(testString, 11)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@LMNOPQRSTUVWXYZABCDEFGHIJK[]^_`lmnopqrstuvwxyzabcdefghijk{|}~');
    });

    it('ROT-12', function() {
      expect(rot(testString, 12)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@MNOPQRSTUVWXYZABCDEFGHIJKL[]^_`mnopqrstuvwxyzabcdefghijkl{|}~');
    });

    it('ROT-13 (default)', function() {
      expect(rot(testString)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@NOPQRSTUVWXYZABCDEFGHIJKLM[]^_`nopqrstuvwxyzabcdefghijklm{|}~');
    });

    it('ROT-13', function() {
      expect(rot(testString, 13)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@NOPQRSTUVWXYZABCDEFGHIJKLM[]^_`nopqrstuvwxyzabcdefghijklm{|}~');
    });

    it('ROT-14', function() {
      expect(rot(testString, 14)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@OPQRSTUVWXYZABCDEFGHIJKLMN[]^_`opqrstuvwxyzabcdefghijklmn{|}~');
    });

    it('ROT-15', function() {
      expect(rot(testString, 15)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@PQRSTUVWXYZABCDEFGHIJKLMNO[]^_`pqrstuvwxyzabcdefghijklmno{|}~');
    });

    it('ROT-16', function() {
      expect(rot(testString, 16)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@QRSTUVWXYZABCDEFGHIJKLMNOP[]^_`qrstuvwxyzabcdefghijklmnop{|}~');
    });

    it('ROT-17', function() {
      expect(rot(testString, 17)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@RSTUVWXYZABCDEFGHIJKLMNOPQ[]^_`rstuvwxyzabcdefghijklmnopq{|}~');
    });

    it('ROT-18', function() {
      expect(rot(testString, 18)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@STUVWXYZABCDEFGHIJKLMNOPQR[]^_`stuvwxyzabcdefghijklmnopqr{|}~');
    });

    it('ROT-19', function() {
      expect(rot(testString, 19)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@TUVWXYZABCDEFGHIJKLMNOPQRS[]^_`tuvwxyzabcdefghijklmnopqrs{|}~');
    });

    it('ROT-20', function() {
      expect(rot(testString, 20)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@UVWXYZABCDEFGHIJKLMNOPQRST[]^_`uvwxyzabcdefghijklmnopqrst{|}~');
    });

    it('ROT-21', function() {
      expect(rot(testString, 21)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@VWXYZABCDEFGHIJKLMNOPQRSTU[]^_`vwxyzabcdefghijklmnopqrstu{|}~');
    });

    it('ROT-22', function() {
      expect(rot(testString, 22)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@WXYZABCDEFGHIJKLMNOPQRSTUV[]^_`wxyzabcdefghijklmnopqrstuv{|}~');
    });

    it('ROT-23', function() {
      expect(rot(testString, 23)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@XYZABCDEFGHIJKLMNOPQRSTUVW[]^_`xyzabcdefghijklmnopqrstuvw{|}~');
    });

    it('ROT-24', function() {
      expect(rot(testString, 24)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@YZABCDEFGHIJKLMNOPQRSTUVWX[]^_`yzabcdefghijklmnopqrstuvwx{|}~');
    });

    it('ROT-25', function() {
      expect(rot(testString, 25)).to.equal(' !"#$%&\'()*+,-./0123456789:;<=>?@ZABCDEFGHIJKLMNOPQRSTUVWXY[]^_`zabcdefghijklmnopqrstuvwxy{|}~');
    });

    it('ROT-26 == ROT-0', function() {
      expect(rot(testString, 26)).to.equal(rot(testString, 0));
    });
  });

  describe('encode & decode', function() {
    it('encodes by using the ROT implementation', function() {
      for (var i = 0; i < 27; i++) {
        expect(encoder(i)(testString)).to.equal(rot(testString, i));
      }
    });

    it('decodes by using the ROT implementation', function() {
      for (var i = 0; i < 27; i++) {
        expect(decoder(i)(testString)).to.equal(rot(testString, -i));
      }
    });

    it('can be chained together', function() {
      for (var i = 0; i < 27; i++) {
        expect(decoder(i)(encoder(i)(testString))).to.equal(testString);
        expect(encoder(i)(decoder(i)(testString))).to.equal(testString);
      }
    });
  });

  describe('emails', function() {
    it('can be encoded with encode', function() {
      var encode = encoder(5);
      expect(encode('mail@example.com')).to.equal(('rfnq@jcfruqj.htr'));
      expect(encode('testmail@example.com')).to.equal(('yjxyrfnq@jcfruqj.htr'));
      expect(encode('mail@testexample.com')).to.equal(('rfnq@yjxyjcfruqj.htr'));
      expect(encode('mail@example.test')).to.equal(('rfnq@jcfruqj.yjxy'));
      expect(encode('mail+ref@example.com')).to.equal(('rfnq+wjk@jcfruqj.htr'));
    });

    it('can be decoded with decode', function() {
      var decode = decoder(5);
      expect(decode('rfnq@jcfruqj.htr')).to.equal(('mail@example.com'));
      expect(decode('yjxyrfnq@jcfruqj.htr')).to.equal(('testmail@example.com'));
      expect(decode('rfnq@yjxyjcfruqj.htr')).to.equal(('mail@testexample.com'));
      expect(decode('rfnq@jcfruqj.yjxy')).to.equal(('mail@example.test'));
      expect(decode('rfnq+wjk@jcfruqj.htr')).to.equal(('mail+ref@example.com'));
    });
  });

});
