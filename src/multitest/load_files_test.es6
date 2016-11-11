const t = require('tape');
const func = require('./load_files');
var path = require('path');

t.test('four files', t => {
    t.plan(1);
    func(
            [{
                    a: path.join(__dirname, 'test_data', 'aaa'),
                    b: path.join(__dirname, 'test_data', 'aaab')}, {
                    a: path.join(__dirname, 'test_data', 'bbb'),
                    b: path.join(__dirname, 'test_data', 'bbbb')}],
            files => t.deepEqual(files, [{
                a: 'contentsaaa\n', b: 'contentsaaab\n'}, {
                a: 'contentsbbb\n', b: 'contentsbbbb\n'}]));
});
