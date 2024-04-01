const { capitalise } = require("./capitalise.js");

test("capitalise sensible inputs", () => {
  expect(capitalise("apple")).toEqual("Apple");
  expect(capitalise("Apple")).toEqual("Apple");
  expect(capitalise("aPpLe")).toEqual("Apple");
  expect(capitalise("APPLE")).toEqual("Apple");
});

test("capitalise - unusual starting character", () => {
  expect(capitalise("!apple")).toEqual("!apple");
});

test("capitalise empty string", () => {
  expect(() => capitalise("")).toThrow(
    "Ensure the input is not an empty string"
  );
});

test("capitalise unacceptable inputs", () => {
  expect(() => capitalise(null)).toThrow("Ensure the input is a string");
  expect(() => capitalise(undefined)).toThrow("Ensure the input is a string");
});
