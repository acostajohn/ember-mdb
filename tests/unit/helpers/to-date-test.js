import { toDate } from 'ember-mdb/helpers/to-date';

module('Date Helper');

test('should format a valid date', function() {
  equal(toDate('2014-05-27T12:54:01'), '05/27/2014');
});

test('should return undefined if it is not a valid date', function() {
  equal(toDate(''), undefined);
});