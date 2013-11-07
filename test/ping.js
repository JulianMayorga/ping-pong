'use strict';

var ping = require('../src/ping.js');
var should = require('should');

describe('ping', function () {
	it('deberia responder con pong', function () {
		ping().should.equal('pong');
	});
});
