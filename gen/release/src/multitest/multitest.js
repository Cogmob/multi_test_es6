'use strict';

var tape_module = require('tape');
var filter_files = require('./filter_files');
var load_files = require('./load_files');

var multitest = function multitest(t, i) {
    var _i$cwd = i.cwd,
        cwd = _i$cwd === undefined ? '.' : _i$cwd,
        test_func = i.test_func;


    load_files(cwd, filter_files(i), function (groups) {
        groups.forEach(function (group) {
            var keys = Object.keys(group);
            var test_name = group[keys[0]]['filename'];
            if (keys.length === 1) {
                group = group[keys[0]];
            }
            var wrapped_test_func = function wrapped_test_func(a) {
                test_func(test_name, group, a);
                a.end();
            };
            t.test(test_name, wrapped_test_func);
        });
    });
};

var tape = function tape(i) {
    return multitest(tape_module, i);
};

module.exports = { multitest: multitest, tape: tape };