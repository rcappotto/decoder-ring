const polybius = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  describe("encoding", () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius("ij")).to.equal("4242");
    });

    it("should encode 'raquel' to 241114545113", () => {
      expect(polybius("raquel")).to.equal("241114545113");
    });

    it("should maintain spaces", () => {
      expect(polybius("raquel c")).to.equal("241114545113 31");
    });
    it("should ignore capital letters", () => {
      expect(polybius("Thinkful")).to.equal("4242424211551155");
    });
  });
  describe("decoding", () => {
    it("should decode 421123 to i/jam", () => {
      expect(polybius("421123", false)).to.eql("i/jam");
    });

    it("should translate 42 to (i/j)", () => {
      expect(polybius("42", false)).to.eql("(i/j)");
    });
    
    it("should return false if the length of all numbers is odd", () => {
      expect(polybius("237", false)).to.be.false;
    });
  });
});
