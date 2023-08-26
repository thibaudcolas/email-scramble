const { rot, encode, decode } = require("./index");

var testString =
  " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";

describe("email-scramble", () => {
  it("exposes a small API", () => {
    expect(rot).toBeDefined();
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });

  describe("ROT implementation", () => {
    // Convert tests below to single table
    it.each`
      charRot | numRot | expected
      ${0}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~"}
      ${1}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@BCDEFGHIJKLMNOPQRSTUVWXYZA[]^_`bcdefghijklmnopqrstuvwxyza{|}~"}
      ${2}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@CDEFGHIJKLMNOPQRSTUVWXYZAB[]^_`cdefghijklmnopqrstuvwxyzab{|}~"}
      ${3}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@DEFGHIJKLMNOPQRSTUVWXYZABC[]^_`defghijklmnopqrstuvwxyzabc{|}~"}
      ${4}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@EFGHIJKLMNOPQRSTUVWXYZABCD[]^_`efghijklmnopqrstuvwxyzabcd{|}~"}
      ${5}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@FGHIJKLMNOPQRSTUVWXYZABCDE[]^_`fghijklmnopqrstuvwxyzabcde{|}~"}
      ${6}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@GHIJKLMNOPQRSTUVWXYZABCDEF[]^_`ghijklmnopqrstuvwxyzabcdef{|}~"}
      ${7}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@HIJKLMNOPQRSTUVWXYZABCDEFG[]^_`hijklmnopqrstuvwxyzabcdefg{|}~"}
      ${8}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@IJKLMNOPQRSTUVWXYZABCDEFGH[]^_`ijklmnopqrstuvwxyzabcdefgh{|}~"}
      ${9}    | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@JKLMNOPQRSTUVWXYZABCDEFGHI[]^_`jklmnopqrstuvwxyzabcdefghi{|}~"}
      ${10}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@KLMNOPQRSTUVWXYZABCDEFGHIJ[]^_`klmnopqrstuvwxyzabcdefghij{|}~"}
      ${11}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@LMNOPQRSTUVWXYZABCDEFGHIJK[]^_`lmnopqrstuvwxyzabcdefghijk{|}~"}
      ${12}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@MNOPQRSTUVWXYZABCDEFGHIJKL[]^_`mnopqrstuvwxyzabcdefghijkl{|}~"}
      ${13}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@NOPQRSTUVWXYZABCDEFGHIJKLM[]^_`nopqrstuvwxyzabcdefghijklm{|}~"}
      ${14}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@OPQRSTUVWXYZABCDEFGHIJKLMN[]^_`opqrstuvwxyzabcdefghijklmn{|}~"}
      ${15}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@PQRSTUVWXYZABCDEFGHIJKLMNO[]^_`pqrstuvwxyzabcdefghijklmno{|}~"}
      ${16}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@QRSTUVWXYZABCDEFGHIJKLMNOP[]^_`qrstuvwxyzabcdefghijklmnop{|}~"}
      ${17}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@RSTUVWXYZABCDEFGHIJKLMNOPQ[]^_`rstuvwxyzabcdefghijklmnopq{|}~"}
      ${18}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@STUVWXYZABCDEFGHIJKLMNOPQR[]^_`stuvwxyzabcdefghijklmnopqr{|}~"}
      ${19}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@TUVWXYZABCDEFGHIJKLMNOPQRS[]^_`tuvwxyzabcdefghijklmnopqrs{|}~"}
      ${20}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@UVWXYZABCDEFGHIJKLMNOPQRST[]^_`uvwxyzabcdefghijklmnopqrst{|}~"}
      ${21}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@VWXYZABCDEFGHIJKLMNOPQRSTU[]^_`vwxyzabcdefghijklmnopqrstu{|}~"}
      ${22}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@WXYZABCDEFGHIJKLMNOPQRSTUV[]^_`wxyzabcdefghijklmnopqrstuv{|}~"}
      ${23}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@XYZABCDEFGHIJKLMNOPQRSTUVW[]^_`xyzabcdefghijklmnopqrstuvw{|}~"}
      ${24}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@YZABCDEFGHIJKLMNOPQRSTUVWX[]^_`yzabcdefghijklmnopqrstuvwx{|}~"}
      ${25}   | ${0}   | ${" !\"#$%&'()*+,-./0123456789:;<=>?@ZABCDEFGHIJKLMNOPQRSTUVWXY[]^_`zabcdefghijklmnopqrstuvwxy{|}~"}
    `("ROT-$charRot", ({ charRot, numRot, expected }) => {
      expect(rot(charRot, numRot, testString)).toEqual(expected);
    });

    it("ROT-26 == ROT-0", () => {
      expect(rot(26, 0, testString)).toEqual(rot(0, 0, testString));
    });
  });

  describe("encode & decode", () => {
    it("encodes by using the ROT implementation", () => {
      expect(encode(testString)).toEqual(rot(13, 5, testString));
    });

    it("decodes by using the ROT implementation", () => {
      expect(decode(testString)).toEqual(rot(13, 5, testString));
    });

    it("can be chained together", () => {
      expect(decode(encode(testString))).toEqual(testString);
      expect(encode(decode(testString))).toEqual(testString);
    });
  });

  describe("emails", () => {
    it("can be encoded with encode", () => {
      expect(encode("mail@example.com")).toEqual("znvy@rknzcyr.pbz");
      expect(encode("testmail@example.com")).toEqual("grfgznvy@rknzcyr.pbz");
      expect(encode("mail@testexample.com")).toEqual("znvy@grfgrknzcyr.pbz");
      expect(encode("mail@example.test")).toEqual("znvy@rknzcyr.grfg");
      expect(encode("mail+ref@example.com")).toEqual("znvy+ers@rknzcyr.pbz");
    });

    it("can be decoded with decode", () => {
      expect(decode("znvy@rknzcyr.pbz")).toEqual("mail@example.com");
      expect(decode("grfgznvy@rknzcyr.pbz")).toEqual("testmail@example.com");
      expect(decode("znvy@grfgrknzcyr.pbz")).toEqual("mail@testexample.com");
      expect(decode("znvy@rknzcyr.grfg")).toEqual("mail@example.test");
      expect(decode("znvy+ers@rknzcyr.pbz")).toEqual("mail+ref@example.com");
    });
  });
});
