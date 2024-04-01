const { caesarCipher } = require("./caesarCipher.js");

// note could tidy up scenarios where both params are wrong or missing slightly
// not doing punctuation!

const stringErrorMsg = "input string must be lowercase between a and z";
const shiftErrorMsg = "input shift must be a non-negative number";

test("caeserCipher - basic shift", () => {
  expect(caesarCipher("abc", 3)).toEqual("def");
  expect(caesarCipher("abc", 4)).toEqual("efg");
  expect(caesarCipher("abc", 0)).toEqual("abc");
  expect(caesarCipher("def", 3)).toEqual("ghi");
  expect(caesarCipher("zab", 3)).toEqual("cde");
});

test("caeserCipher - capital letters", () => {
  expect(() => caesarCipher("ABC", 3)).toThrow(stringErrorMsg);
});

test("caeserCipher - strange character inputs", () => {
  expect(() => caesarCipher("$^&", 3)).toThrow(stringErrorMsg);
  expect(() => caesarCipher("a0a", 3)).toThrow(stringErrorMsg);
});

test("caeserCipher - empty string", () => {
  expect(() => caesarCipher("", 3)).toThrow(stringErrorMsg);
});

test("caeserCipher - bad params", () => {
  expect(() => caesarCipher(null, 3)).toThrow(stringErrorMsg);
  expect(() => caesarCipher(undefined, 3)).toThrow(stringErrorMsg);
  expect(() => caesarCipher(true, 3)).toThrow(stringErrorMsg);
});

test("caeserCipher - strange shift numbers", () => {
  expect(() => caesarCipher("abc", -1)).toThrow(shiftErrorMsg);
  expect(() => caesarCipher(null, -12)).toThrow(shiftErrorMsg);
});

test("caeserCipher - missing parameters", () => {
  expect(() => caesarCipher()).toThrow(shiftErrorMsg);
  expect(() => caesarCipher("abc")).toThrow(shiftErrorMsg);
});
