const capitalise = (str) => {
  if (typeof str === "string") {
    if (str.length >= 1) {
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    } else {
      throw new Error("Ensure the input is not an empty string");
    }
  } else {
    throw new Error("Ensure the input is a string");
  }
};

module.exports = { capitalise };
