var assert = require('assert');
var namespace = require('../namespace');

describe('namespace', function() {
	describe('require', function() {
		it('should not be undefined', function() {
			assert.notEqual(typeof undefined, typeof namespace);
		});

		it('should be a function', function() {
			assert.equal(typeof function() {}, typeof namespace);
		});
	});

	describe('assign', function() {
		it('should return the function', function() {
			var testfn = function() {
				return true;
			};
			assert.equal(testfn, namespace('test.fn', testfn));
		});

		it('should return the object', function() {
			var testobj = {
				foo: 'bar'
			};
			assert.equal(JSON.stringify(testobj), JSON.stringify(namespace('test.obj', testobj)));
		});

		it('should return the string', function() {
			var teststr = 'foo';
			assert.equal(teststr, namespace('test.str', teststr));
		});
	});

	describe('get', function() {
		it('should execute the function and return true', function() {
			assert.equal(true, namespace('test.fn')());
		});

		it('should return an object', function() {
			assert.equal(typeof {}, typeof namespace('test.obj'));
		});

		it('should return the correct property value', function() {
			assert.equal('bar', namespace('test.obj').foo);
		});

		it('should return the string type', function() {
			assert.equal(typeof 'foo', typeof namespace('test.str'));
		});

		it('should return the correct string', function() {
			assert.equal('foo', namespace('test.str'));
		});
	});

	describe('update', function() {
		it('should return the new string', function() {
			var teststr = 'hello world';
			assert.equal(teststr, namespace('test.str', teststr));
		});

		it('should execute the right function and return false', function() {
			var testfn = function() {
				return false;
			};
			assert.equal(testfn(), namespace('test.fn', testfn)());
		});
	});

	describe('nested', function() {
		it('should contain properties of both objects', function() {
			var one = {
				first: true
			};
			var main = {
				main: true
			};

			namespace('test.main.one', one);
			namespace('test.main', main);

			assert.equal(JSON.stringify(namespace('test.main.one')), JSON.stringify(one));
			// this test checks if test.main contains all the properties from main
			assert.equal(true, (function() {
				for(var field in main) {
					if(!namespace('test.main').hasOwnProperty(field))
						return false;
				}
				return true;
			})());

		});
	});
});