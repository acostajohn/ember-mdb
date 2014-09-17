import Ember from 'ember';

/**
 * Converts a timestamp into a humanized date
 * @param {String} timestamp, Raw timestamp
 * @return {String} formatted date
 */
function toDate(timestamp) {
  var date = moment(timestamp);

  if (date.isValid()) {
    return date.format('MM/DD/YYYY');
  }
}

export default Ember.Handlebars.makeBoundHelper(toDate);