const func = require('./filter_files');
const t = require('tape');

const path = 'src/multitest';

t.test('glob_only', t => {
    t.plan(1);
    const res = func({
            glob_string: '**/*',
            cwd: path + '/test_data'});
    t.deepEqual(
            res,
            [['aaa', 'aab', 'bbb', 'bbbb', 'folder_1', 'folder_1/lll', 'folder_1/llm', 'folder_2', 'folder_2/nna', 'folder_2/nnnn', 'not', 'not/cccc', 'not/dddddd']]);
});
