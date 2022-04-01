// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // a function to encode or decode via a polybius square
  // parameters:
    // a message to be encoded or decoded
    // encode true/false. if true encode, if false decode
  const decodeTable = {
    11:"a",21:"b",31:"c",41:"d",51:"e",
    12:"f",22:"g",32:"h",42:"i/j",52:"k",
    13:"l",23:"m",33:"n",43:"o",53:"p",
    14:"q",24:"r",34:"s",44:"t",54:"u",
    15:"v",25:"w",35:"x",45:"y",55:"z",
  };
  const encodeTable = {i:"42", j:"42"};
  for(let key in decodeTable){
    const val = decodeTable[key];
    if(val !== "i/j"){
      encodeTable[val] = key;
    }
  }
  //console.log(encodeTable)
  function polybius(input, encode = true) {
    console.log(input)
    const out = [];
    if(encode){
      for(let i = 0; i < input.length; i++){
        const char = input[i];
        const code = encodeTable[char];
        if(code === undefined){
          out.push(char);
        }
        else{
          out.push(code);
        }
      }
    }
    else{
      for(let i = 0; i < input.length; i+=2){
        // get the substring of input from index i
        // to index i+2 e.g.
        // if input = 1234 56 we can get 34 with
        // input.slice(2,4)
        const code = input.slice(i, i+2);
        if(code.length < 2){
          return false;
        }
        const char = decodeTable[code];
        // 3251131343 25432413411
        if(char === undefined){
          out.push(input[i]);
          i--;
        }
        else{
          out.push(char);
        }
      }
    }
    return out.join("");
  }

  return {
    polybius,
   };
})();

module.exports = { polybius: polybiusModule.polybius };