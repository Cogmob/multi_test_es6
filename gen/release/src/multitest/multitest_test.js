'use strict';

var tape_module = require('tape');
var multitest = require('./multitest');

var path = 'src/multitest';

tape_module.test('four tests', function (t) {
    t.plan(5);

    var fake_tape = {
        test: function test(name, func) {
            func(fake_tape);
        },
        end: function end() {
            return t.ok(true);
        } };

    multitest.multitest(fake_tape, {
        cwd: path + '/test_data',
        filters: [/^...$/],
        negative_filters: [/not/],
        make_groups: function make_groups(path) {
            return {
                a: path,
                b: path + 'b' };
        },
        test_func: function test_func(test_name, group, tape) {
            t.ok(['aaa', 'bbb'].includes(test_name));
            t.deepEqual(group, {
                aaa: {
                    a: { contents: 'contentsaaa\n', filename: 'aaa' },
                    b: { contents: 'contentsaaab\n', filename: 'aaab' } },
                bbb: {
                    a: { contents: 'contentsbbb\n', filename: 'bbb' },
                    b: { contents: 'contentsbbbb\n', filename: 'bbbb' } } }[test_name]);
        } });
});