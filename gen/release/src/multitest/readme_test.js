'use strict';

var mt = require('./multitest').tape;
var tape_module = require('tape');

function prefix(i) {
    return 'pre-' + i;
}

mt({
    path: 'src/multitest/readme_data/*before',
    make_groups: function make_groups(path) {
        var root = path.replace('before', '');
        return {
            before: path,
            after: root + 'after' };
    },
    test_func: function test_func(test_name, contents, tape) {
        tape.equal(prefix(contents['before']['contents']), contents['after']['contents']);
    } });