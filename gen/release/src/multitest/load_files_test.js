'use strict';

var t = require('tape');
var func = require('./load_files');
var path = require('path');

t.test('four files', function (t) {
    t.plan(1);
    func(path.join(__dirname, 'test_data'), [{ a: 'aaa', b: 'aaab' }, { a: 'bbb', b: 'bbbb' }], function (files) {
        return t.deepEqual(files, [{
            a: { contents: 'contentsaaa\n', filename: 'aaa' },
            b: { contents: 'contentsaaab\n', filename: 'aaab' } }, {
            a: { contents: 'contentsbbb\n', filename: 'bbb' },
            b: { contents: 'contentsbbbb\n', filename: 'bbbb' } }]);
    });
});