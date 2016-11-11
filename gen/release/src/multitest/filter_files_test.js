'use strict';

var func = require('./filter_files');
var t = require('tape');

var path = 'src/multitest';

t.test('glob only', function (t) {
        t.plan(1);
        var res = func({
                path: '**',
                cwd: path + '/test_data' });
        t.deepEqual(res, [{ all: 'aaa' }, { all: 'aaab' }, { all: 'bbb' }, { all: 'bbbb' }, { all: 'folder_1' }, { all: 'folder_1/lll' }, { all: 'folder_1/llm' }, { all: 'folder_2' }, { all: 'folder_2/nna' }, { all: 'folder_2/nnnn' }, { all: 'not' }, { all: 'not/cccc' }, { all: 'not/dddddd' }]);
});

t.test('white/black list', function (t) {
        t.plan(1);
        var res = func({
                path: 'folder*/*',
                filters: [/.*\/l/],
                negative_filters: [/m/],
                cwd: path + '/test_data' });
        t.deepEqual(res, [{ all: 'folder_1/lll' }]);
});

t.test('2 groups', function (t) {
        t.plan(1);
        var res = func({
                cwd: path + '/test_data',
                filters: [/^...$/],
                negative_filters: [/not/],
                make_groups: function make_groups(path) {
                        return {
                                a: path,
                                b: path + 'b' };
                } });
        t.deepEqual(res, [{ a: 'aaa', b: 'aaab' }, { a: 'bbb', b: 'bbbb' }]);
});