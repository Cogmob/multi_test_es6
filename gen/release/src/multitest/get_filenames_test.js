'use strict';

var t = require('tape');
var func = require('./get_filenames');

var path = 'src/multitest/test_data/';

t.test('get filenames', function (t) {
    var res = func([{
        a: path + 'aaa',
        b: path + 'aaab' }, {
        a: path + 'bbb',
        b: path + 'bbbb' }]);
    t.deepEqual(res, ['src/multitest/test_data/aaa', 'src/multitest/test_data/aaab', 'src/multitest/test_data/bbb', 'src/multitest/test_data/bbbb']);
    t.end();
});