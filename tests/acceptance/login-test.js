import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Login', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('login form should contains the input boxes for login and password', function() {
  expect(3);

  visit('/login').then(function() {
    var username = find('#username-input'),
      password = find('#password-input'),
      submitBtn = find('button');

    equal(username.length, 1);
    equal(password.length, 1);
    equal(submitBtn.attr('type'), 'submit');
  });
});


test('should redirect to main page if login is succeeded', function() {
  visit('/login');
  fillIn('#username-input', 'tony');
  fillIn('#password-input', 'montana');
  click('button');
  andThen(function() {
    equal(currentURL(), '/');
  });
});

test('should show an error message when login fails', function() {
  expect(2);

  visit('/login');
  fillIn('#username-input', 'aaaa');
  fillIn('#password-input', 'bbbb');
  click('button');
  andThen(function() {
    equal(find('.error-message').length, 1);
    equal(find('.error-message').html(), 'You entered incorrect credentials');
  });
});