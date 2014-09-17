import Ember from 'ember';

/**
 * Converts a numeric value into a percentage value
 * @param {String|Number} value, Numeric values that might come as a string
 * @return {String} percentage value
 */
function toPercentage(value) {
  value = Number(value);

  if (isNaN(value)) {
    value = 0;
  }

  return value + '%';
}

export { toPercentage };
export default Ember.Handlebars.makeBoundHelper(toPercentage);