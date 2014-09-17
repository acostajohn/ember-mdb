import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number'),
  actors: DS.hasMany('actor', { async: true }),
  release: DS.attr('date')
});