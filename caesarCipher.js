// note, I'm choosing to control inputs to be:
// - str: lowercase a to z and return lowercase a to z
// - shift: a non-negative number

const caesarCipher = (str, shift) => {
  const strErrorMessage = "input string must be lowercase between a and z";
  const shiftErrorMessage = "input shift must be a non-negative number";

  if (typeof shift !== "number" || shift < 0) {
    throw new Error(shiftErrorMessage);
  }

  if (typeof str === "string" && str.length > 0) {
    const stringArray = str.split("");

    const encoded = stringArray
      .map((element) => {
        const charCode = element.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
          // e.g. z + 3 is 122 to 125 down to 99 which is c
          const charDecode = 97 + ((charCode + shift - 97) % 26);
          return String.fromCharCode(charDecode);
        } else {
          throw new Error(strErrorMessage);
        }
      })
      .join("");
    return encoded;
  } else {
    throw new Error(strErrorMessage);
  }
};

module.exports = { caesarCipher };
