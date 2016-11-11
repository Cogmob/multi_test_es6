'use strict';

var tape_module = require('tape');
var filter_files = require('./filter_files');
var load_files = require('./load_files');

var multitest = function multitest(t, i) {
    var path = i.path,
        filters = i.filters,
        negative_filters = i.negative_filters,
        make_groups = i.make_groups,
        cwd = i.cwd,
        test_func = i.test_func;


    load_files(cwd, filter_files(i), function (groups) {
        groups.forEach(function (group) {
            var test_name = group[Object.keys(group)[0]]['filename'];
            t.test(test_name, function (a) {
                return test_func({ test_name: test_name, group: group, a: a });
            });
        });
    });

    t.end();
};

var tape = function tape(i) {
    return multitest(tape_module, i);
};

module.exports = { multitest: multitest, tape: tape };