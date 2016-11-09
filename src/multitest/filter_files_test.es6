const func = require('./filter_files');
const t = require('tape');

const path = 'src/multitest';

t.test('glob only', t => {
    t.plan(1);
    const res = func({
            glob_string: '**/*',
            cwd: path + '/test_data'});
    t.deepEqual(
            res,
            [['aaa', 'aab', 'bbb', 'bbbb', 'folder_1', 'folder_1/lll', 'folder_1/llm', 'folder_2', 'folder_2/nna', 'folder_2/nnnn', 'not', 'not/cccc', 'not/dddddd']]);
});

t.test('white/black list', t => {
    t.plan(1);
    const res = func({
            glob_string: 'folder*/*',
            white_list: ['l'],
            black_list: ['m'],
            cwd: path + '/test_data'});
    t.deepEqual(
            res,
            []);
});
