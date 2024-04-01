const analyzeArray = (array) => {
  const arrayErrorMsg = "input must be a non-empty array of numbers";

  // error trapping
  if (!Array.isArray(array) || array.length === 0 || !checkOnlyNumbers(array))
    throw new Error(arrayErrorMsg);

  const { arrayMin, arrayMax } = arrayMinAndMax(array);
  const arraySum = array.reduce((calc, current) => calc + current, 0);

  return {
    average: arraySum / array.length,
    min: arrayMin,
    max: arrayMax,
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

const arrayMinAndMax = (arr) => {
  arr.sort((a, b) => a - b);
  const arrayMin = arr[0];
  const arrayMax = arr[arr.length - 1];
  return { arrayMin, arrayMax };
};

module.exports = { analyzeArray };
