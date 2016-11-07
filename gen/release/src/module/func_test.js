'use strict';

var test = require('tape');
var func = require('./func');

test('test pass', function (t) {
    t.plan(1);
    var res = func();
    t.deepEqual([1, 2], res);
});

test('test fail', function (t) {
    t.plan(1);
    var res = func();
    t.deepEqual({ a: [1, 3] }, { a: res });
});