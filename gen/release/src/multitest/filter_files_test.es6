const func = require('./filter_files');
const t = require('tape');
const p = require('path');

const path = p.join('src', 'multitest');

t.test('glob only', t => {
    t.plan(1);
    const res = func({
            path: '**',
            cwd: p.join(path, 'test_data')});
    t.deepEqual(
            res,
            [{all: 'aaa'}, {all: 'aaab'}, {all: 'bbb'}, {all: 'bbbb'}, {all: 'folder_1'}, {all: 'folder_1/lll'}, {all: 'folder_1/llm'}, {all: 'folder_2'}, {all: 'folder_2/nna'}, {all: 'folder_2/nnnn'}, {all: 'not'}, {all: 'not/cccc'}, {all: 'not/dddddd'}]);
});

t.test('white/black list', t => {
    t.plan(1);
    const res = func({
            path: 'folder*/*',
            filters: [/.*\/l/],
            negative_filters: [/m/],
            cwd: p.join(path, '/test_data')});
    t.deepEqual(
            res,
            [{all: 'folder_1/lll'}]);
});

t.test('2 groups', t => {
    t.plan(1);
    const res = func({
            cwd: p.join(path, 'test_data'),
            filters: [/^...$/],
            negative_filters: [/not/],
            make_groups: path => ({
                    a: path,
                    b: path + 'b'})});
    t.deepEqual(
            res,
            [{a: 'aaa', b: 'aaab'}, {a: 'bbb', b: 'bbbb'}]);
});
