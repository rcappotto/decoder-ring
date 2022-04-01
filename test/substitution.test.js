const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution()", () => {
  it("should be a function", () => {
    expect(substitution).to.be.a("function");
  });

  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      let alphabet = undefined;
      let input = "hello";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      let alphabet = "short";
      let input = "hello";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      let alphabet = "abcddhddccaaadhhbyyzzzqqyz";
      let input = "hello";
      let actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "thinkful";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("jrufscpw");
    });
   
    it("should preserve spaces", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "hello governor";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("rmwwl glzmhflh");
    });
    it("should ignore capital letters", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "ThinkFUL";
      let actual = substitution(input, alphabet);
      expect(actual).to.equal("jrufscpw");
    });
  });

  describe("decoding", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "jrufscpw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
    
  
    it("should preserve spaces", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "rmwwl glzmhflh";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("hello governor");
    });
    
    it("should ignore capital letters", () => {
      let alphabet = "xoyqmcgrukswaflnthdjpzibev";
      let input = "JRUFScpw";
      let actual = substitution(input, alphabet, false);
      expect(actual).to.equal("thinkful");
    });
  });
});
