const { reverseString } = require("./reverseString.js");

test("reverse string", () => {
  expect(reverseString("apple")).toEqual("elppa");
  expect(reverseString("Apple")).toEqual("elppA");
  expect(reverseString("a b")).toEqual("b a");
});

test("reverse string - long string", () => {
  expect(reverseString("aaaaaaaaaaaaaaaaaaaaaaab")).toEqual(
    "baaaaaaaaaaaaaaaaaaaaaaa"
  );
});

test("reverse string - empty", () => {
  expect(reverseString("")).toEqual("");
});

test("reverse string - unacceptable inputs", () => {
  expect(() => reverseString(null)).toThrow("Ensure the input is a string");
  expect(() => reverseString(undefined)).toThrow(
    "Ensure the input is a string"
  );
});
