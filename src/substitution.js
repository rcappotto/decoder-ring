// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  
  function substitution(input, alphabet, encode = true) {
     if (!alphabet || alphabet.length !== 26) return false;

   
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphabet = alphabet.toLowerCase().split("");

    
    const onlyUnique = subAlphabet.filter(
      (item, index, array) => array.indexOf(item) === index
    );
    if (onlyUnique.length !== alphabet.length) return false;

    const encodeMessage = () => {
      let result = [];
      const encode = (letter) => {
        const letterIndex = realAlphabet.indexOf(letter);
        const encodedLetter = subAlphabet[letterIndex];
        result.push(encodedLetter);
      };
      inputArray.forEach((letter) => {
      
        letter === " " ? result.push(" ") : encode(letter);
      });
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlphabet.indexOf(char);
        const decodedChar = realAlphabet[charIndex];
        result.push(decodedChar);
      };
      inputArray.forEach((char) => {
        
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    
    return encode ? encodeMessage() : decodeMessage();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
