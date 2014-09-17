import { toPercentage } from 'ember-mdb/helpers/to-percentage';

module('Percentage Helper');

test('should format numeric values', function() {
  expect(4);
  equal(toPercentage(10), '10%');
  equal(toPercentage(100), '100%');
  equal(toPercentage(0), '0%');
  equal(toPercentage(10.4), '10.4%');
});

test('should turns non-numeric values into zero', function() {
  expect(3);
  equal(toPercentage(null), '0%');
  equal(toPercentage(undefined), '0%');
  equal(toPercentage(NaN), '0%');
});