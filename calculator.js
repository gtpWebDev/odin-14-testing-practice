const calculator = () => {
  const twoNumError = "Ensure two numbers are passed to the function";

  const add = (x, y) => {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else {
      throw new Error(twoNumError);
    }
  };

  const subtract = (x, y) => {
    if (typeof x === "number" && typeof y === "number") {
      return x - y;
    } else {
      throw new Error(twoNumError);
    }
  };

  const multiply = (x, y) => {
    if (typeof x === "number" && typeof y === "number") {
      return x * y;
    } else {
      throw new Error(twoNumError);
    }
  };

  const divide = (x, y) => {
    if (typeof x === "number" && typeof y === "number") {
      if (y === 0) {
        throw new Error("Cannot divide by zero");
      } else {
        return x / y;
      }
    } else {
      throw new Error(twoNumError);
    }
  };

  return { add, subtract, divide, multiply };
};

module.exports = { calculator };
