const caesar = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
  let input = "Raquel";
  let shift = 3;

  it("is a function", () => {
    expect(caesar).to.be.a("function");
  });

  it("returns false for all invalid shift values", () => {
    const shiftValues = [0, -25, 25, null, undefined];
    const actual = shiftValues.every((shift) => {
      return !caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  it("returns a result for all valid shift numbers", () => {
    const shiftValues = [-25, -1, 1, 25];
    const actual = shiftValues.every((shift) => {
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  describe("encoding a message", () => {
    it("returns a string", () => {
      const expected = "string";
      const actual = typeof caesar(input, shift);
      expect(actual).to.equal(expected);
    });
   
    it("encodes 'Raquel' shift-1 correctly", () => {
      input = "Raquel";
      shift = -1;
      const expected = "sbrvfm";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("decodes 'sbrvfm' shift-1 correctly", () => {
      input = "sbrvfm";
      shift = -1;
      const expected = "Raquel";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });

    it("decodes 'sbrvfm' shift+1 correctly", () => {
      input = "sbrvfm";
      shift = 1;
      const expected = "Raquel";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    });
  });
});
