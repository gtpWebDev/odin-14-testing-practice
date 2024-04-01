const { analyzeArray } = require("./analyzeArray.js");

const arrayErrorMsg = "input must be a non-empty array of numbers";

test("analyzeArray - basic functionality", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([-1, 0, 1, 2, 3])).toEqual({
    average: 1,
    min: -1,
    max: 3,
    length: 5,
  });
  expect(analyzeArray([6, 7, 8])).toEqual({
    average: 7,
    min: 6,
    max: 8,
    length: 3,
  });
});

test("analyzeArray - empty array input", () => {
  expect(() => analyzeArray([])).toThrow(arrayErrorMsg);
});

test("analyzeArray - non array input", () => {
  expect(() => analyzeArray("sss")).toThrow(arrayErrorMsg);
  expect(() => analyzeArray(true)).toThrow(arrayErrorMsg);
  expect(() => analyzeArray()).toThrow(arrayErrorMsg);
  expect(() => analyzeArray(null)).toThrow(arrayErrorMsg);
  expect(() => analyzeArray(undefined)).toThrow(arrayErrorMsg);
});

test("analyzeArray - non numbers in array", () => {
  expect(() => analyzeArray([1, 2, "three"])).toThrow(arrayErrorMsg);
  expect(() => analyzeArray(["", 2, true])).toThrow(arrayErrorMsg);
});
