import Ember from 'ember';

export default Ember.ObjectController.extend({

  oldestActors: function() {
    return this.get('actors').filter(function(actor) {
      return actor.get('age') > 70;
    });
  }.property('actors')
});