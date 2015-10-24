'use strict';
var assert = require('assert');
var eslintRules = require('./');

describe('Eslint rules', function () {

  it('should be defined', function () {
    assert(eslintRules);
  });

  it('should contain some rules', function () {
    assert.notEqual(Object.keys(eslintRules).length, 0);
  });

  it('should have a description property', function () {
    assert(eslintRules[0].hasOwnProperty('description'));
  });

  it('should have a link property', function () {
    assert(eslintRules[0].hasOwnProperty('link'));
  });

  it('should have a recommended property', function () {
    assert(eslintRules[0].hasOwnProperty('recommended'));
  });

  it('should have a type property', function () {
    assert(eslintRules[0].hasOwnProperty('type'));
  });
});