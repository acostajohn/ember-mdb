import Ember from 'ember';

export default Ember.Route.extend({
  model: function(id) {
    return this.store.filter('movie', {id: id});
  }
});