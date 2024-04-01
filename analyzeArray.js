const analyzeArray = (array) => {
  const arrayErrorMsg = "input must be a non-empty array of numbers";

  // error trapping
  if (!Array.isArray(array) || array.length === 0 || !checkOnlyNumbers(array))
    throw new Error(arrayErrorMsg);

  const arraySum = array.reduce((calc, current) => calc + current, 0);

  return {
    average: arraySum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

const checkOnlyNumbers = (array) => {
  const arrayAllNumbers = array.reduce(
    (calc, current) => calc * (typeof current === "number" ? 1 : 0),
    1
  );
  return arrayAllNumbers ? true : false;
};

module.exports = { analyzeArray };
