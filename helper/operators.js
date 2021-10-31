// @ts-check
import typedefs from "./../typedefs";

/**
 * @param {Object} params
 * @param {number} params.a
 * @param {number} params.b
 * @param {typedefs.Operator} params.operator
 *
 * @returns {number}
 */
const calculate = ({ a, b, operator }) => {
  if (!isNaN(a) && !isNaN(b)) {
    switch (operator) {
      case "add":
        return a + b;
      case "substract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        return NaN;
    }
  } else {
    return NaN;
  }
};

export { calculate };
