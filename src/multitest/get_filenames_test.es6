const t = require('tape');
const func = require('./get_filenames');

const path = 'src/multitest/test_data/';

t.test('get filenames', t => {
    const res = func([{
            a: path + 'aaa',
            b: path + 'aaab'}, {
            a: path + 'bbb',
            b: path + 'bbbb'}]);
    t.deepEqual(res, [
        'src/multitest/test_data/aaa',
        'src/multitest/test_data/aaab',
        'src/multitest/test_data/bbb',
        'src/multitest/test_data/bbbb']);
    t.end();
});
