import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberMdbENV.locationType
});

Router.map(function() {
  this.route('login');

  this.resource('movies', function() {
    this.resource('movie', {path: ':movie_id'});
  });
});

export default Router;
