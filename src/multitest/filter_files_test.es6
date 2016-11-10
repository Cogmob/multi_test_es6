const func = require('./filter_files');
const t = require('tape');

const path = 'src/multitest';

t.test('glob only', t => {
    t.plan(1);
    const res = func({
            path: '**',
            cwd: path + '/test_data'});
    t.deepEqual(
            res,
            ['aaa', 'aaab', 'bbb', 'bbbb', 'folder_1', 'folder_1/lll', 'folder_1/llm', 'folder_2', 'folder_2/nna', 'folder_2/nnnn', 'not', 'not/cccc', 'not/dddddd']);
});

t.test('white/black list', t => {
    t.plan(1);
    const res = func({
            path: 'folder*/*',
            filters: [/.*\/l/],
            negative_filters: [/m/],
            cwd: path + '/test_data'});
    t.deepEqual(
            res,
            ['folder_1/lll']);
});

t.test('2 groups', t => {
    t.plan(1);
    const res = func({
            cwd: path + '/test_data',
            filters: [/^...$/],
            negative_filters: [/not/],
            make_groups: path => ({
                    a: path,
                    b: path + 'b'})});
    t.deepEqual(
            res,
            [{a: 'aaa', b: 'aaab'}, {a: 'bbb', b: 'bbbb'}]);
});
