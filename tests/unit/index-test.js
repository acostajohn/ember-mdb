import Ember from 'ember';
import IndexController from 'ember-mdb/controllers/index';

module('Index Controller');

test('oldestActors should filter accurately', function() {
  var controller = IndexController.create({
    actors: [
      Ember.Object.create({ age: 90 }),
      Ember.Object.create({ age: 45 }),
      Ember.Object.create({ age: 81 })
    ]
  });

  equal(controller.get('oldestActors').length, 2);
});