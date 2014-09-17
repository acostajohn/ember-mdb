import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Movie Detail', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

function initTest() {
  visit('/login');
  fillIn('#username-input', 'tony');
  fillIn('#password-input', 'montana');
  click('button');
  click('.movies-list-thumbnails .list-item:eq(0) a');
}

test('should show movie\'s information', function() {
  initTest();
  andThen(function() {
    equal(find('.movie-title').text().trim(), 'First Blood');
    equal(find('[data-js=score] span').text().trim(), '89%');
    equal(find('[data-js=release-date] span').text().trim(), '05/27/2014');
  });
});

test('should show a list of actors', function() {
  initTest();
  andThen(function() {
    equal(find('[data-js=actors-list] .list-item').length, 2);
  });
});

test('clicking on the main page link should take to the main page', function() {
  initTest();
  click('[data-js=main-page-link] a');
  andThen(function() {
    equal(currentURL(), '/');
  });
});
