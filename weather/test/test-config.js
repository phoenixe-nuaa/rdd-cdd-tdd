var assert = require('assert'),
    config = require('./../lib/config');

var units = {
        type: 'us',
        tmp: '˚F',
        speed: 'mph'
    },
    ip = '127.0.0.1';

var Config = config(units, ip);

describe('Config', function () {
    it('has 3 props', function () {
        assert.equal(Object.keys(Config).length, 3);
    });

    it('after construction, 2 props are populated', function () {
        var count = 0, filted_keys;
        filted_keys = Object.keys(Config).filter(function (key) {
            return typeof(Config[key] !== "undefined");
        });

        assert(filted_keys.length >= 2);
    });

    it('has correct key types',function () {
        Object.keys(Config).forEach(function (key) {
            assert(typeof(key) === 'object' || typeof(key) === 'string');
        })
    });
});
