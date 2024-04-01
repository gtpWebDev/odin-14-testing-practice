const { calculator } = require("./calculator.js");

test("calculator - add", () => {
  const calc = calculator();
  expect(calc.add(1, 2)).toEqual(3);
  expect(calc.add(-1, 2)).toEqual(1);
  expect(calc.add(-1, -2)).toEqual(-3);
  expect(calc.add(3, 0.2)).toEqual(3.2);
  expect(calc.add(-3, 3)).toEqual(0);
  expect(calc.add(2.3, 1.2)).toBeCloseTo(3.5);
});

test("calculator - subtract", () => {
  const calc = calculator();
  expect(calc.subtract(1, 2)).toEqual(-1);
  expect(calc.subtract(2, 1)).toEqual(1);
  expect(calc.subtract(-2, 1)).toEqual(-3);
  expect(calc.subtract(2.3, 1.2)).toBeCloseTo(1.1);
});

test("calculator - multiply", () => {
  const calc = calculator();
  expect(calc.multiply(4, 2)).toEqual(8);
  expect(calc.multiply(-4, 2)).toEqual(-8);
  expect(calc.multiply(4, -2)).toEqual(-8);
  expect(calc.multiply(6, 0)).toEqual(0);
  expect(calc.multiply(3, 1.1)).toBeCloseTo(3.3);
});

test("calculator - divide", () => {
  const calc = calculator();
  expect(calc.divide(4, 1)).toEqual(4);
  expect(calc.divide(4, -1)).toEqual(-4);
  expect(calc.divide(-2, 2)).toEqual(-1);
  expect(calc.divide(1, 3)).toBeCloseTo(0.3333);
});

test("calculator - divide by zero", () => {
  const calc = calculator();
  expect(() => calc.divide(4, 0)).toThrow("Cannot divide by zero");
});

test("calculator - incorrect inputs", () => {
  const calc = calculator();
  expect(() => calc.add(4)).toThrow(
    "Ensure two numbers are passed to the function"
  );
  expect(() => calc.add("4", 2)).toThrow(
    "Ensure two numbers are passed to the function"
  );
  expect(() => calc.subtract(4)).toThrow(
    "Ensure two numbers are passed to the function"
  );
  expect(() => calc.divide(4)).toThrow(
    "Ensure two numbers are passed to the function"
  );
  expect(() => calc.multiply(4)).toThrow(
    "Ensure two numbers are passed to the function"
  );
});
