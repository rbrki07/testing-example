// @ts-check

/**
 * @param {Object} params
 * @param {string} params.text
 *
 * @returns {boolean}
 */
const isNumeric = ({ text }) => {
  if (typeof text !== "string") {
    return false;
  }
  return !isNaN(parseFloat(text));
};

export { isNumeric };
