import Ember from 'ember';

export default Ember.ObjectController.extend({

  /**
   * Filters the list of actors by age which should be greater than 70
   */
  oldestActors: function() {
    return this.get('actors').filter(function(actor) {
      return actor.get('age') > 70;
    });
  }.property('actors')
});