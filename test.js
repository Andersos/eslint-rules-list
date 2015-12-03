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
        assert(typeof eslintRules[0].description === 'string');
    });

    it('should have a link property', function () {
        assert(eslintRules[0].hasOwnProperty('link'));
        assert(typeof eslintRules[0].link === 'string');
    });

    it('should have a recommended property', function () {
        assert(eslintRules[0].hasOwnProperty('recommended'));
        assert(typeof eslintRules[0].recommended === 'boolean');
    });

    it('should have a type property', function () {
        assert(eslintRules[0].hasOwnProperty('type'));
        assert(typeof eslintRules[0].type === 'string');
    });
});