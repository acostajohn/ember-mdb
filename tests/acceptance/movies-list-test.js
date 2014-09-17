import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Movies List', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

function login() {
  visit('/login');
  fillIn('#username-input', 'tony');
  fillIn('#password-input', 'montana');
  click('button');
}

test('should list the movies', function() {
  login();
  andThen(function() {
    equal(find('.movies-list-thumbnails .list-item').length, 2);
  });
});

test('should list only 70 years old actors', function() {
  login();
  andThen(function() {
    equal(find('.actors-list-thumbnails .list-item').length, 3);
  });
});

test('actors should not be links', function() {
  login();
  andThen(function() {
    equal(find('.actors-list-thumbnails a').length, 0);
  });
});

test('clicking on the a movie thumbnail should take me to the movie details', function() {
  login();
  click('.movies-list-thumbnails .list-item:eq(0) a');
  andThen(function() {
    ok(currentURL().indexOf('movie') >= 0);
  });
});

test('If not logged in, user should be taken to the login', function() {
  visit('/').then(function() {
    equal(currentURL(), '/login');
  });
});