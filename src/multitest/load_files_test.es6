const t = require('tape');
const func = require('./load_files');
const path = require('path');

t.test('four files', t => {
    t.plan(1);
    func(
            path.join(__dirname, 'test_data'),
            [{ a: 'aaa', b: 'aaab'}, { a: 'bbb', b: 'bbbb'}],
            files => t.deepEqual(files, [{
                a: {contents: 'contentsaaa\n', filename: 'aaa'},
                b: {contents: 'contentsaaab\n', filename: 'aaab'}}, {
                a: {contents: 'contentsbbb\n', filename: 'bbb'},
                b: {contents: 'contentsbbbb\n', filename: 'bbbb'}}]));
});
