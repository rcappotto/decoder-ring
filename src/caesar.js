// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
 function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift === 0 || shift < -25 || shift > 25|| shift === undefined) {
      return false;
    }
    if(encode === false){
      shift = -shift;
    }
    const output = [];
    input = input.toLowerCase();
    for(let i = 0; i < input.length; i++){
      const char = input[i];
      let code = alphabet.indexOf(char);
      if(code === -1){
        output.push(char);
      }
      else{
        code += shift;
        if(code > 25){
          code -= 26;
        }
        else if(code < 0){
          code += 26
        }
        const newChar = alphabet[code];
        output.push(newChar);
      }
    }
    return output.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

