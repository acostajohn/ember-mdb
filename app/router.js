import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberMdbENV.locationType
});

Router.map(function() {
  this.resource('movie', {path: 'movies/:movie_id'});
});

export default Router;
