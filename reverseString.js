const reverseString = (str) => {
  if (typeof str === "string") {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
      output += str.charAt(i);
    }
    return output;
  } else {
    throw new Error("Ensure the input is a string");
  }
};

module.exports = { reverseString };
