const test = require('tape');
const func = require('./is_at_least_one_element_a_substring');

test('is at least one element a substring', t => {
    t.ok(func(['a'], 'abc'));
    t.notOk(func(['a'], 'bc'));
    t.ok(func(['a','b'], 'abc'));
    t.ok(func(['a','b'], 'ac'));
    t.ok(func(['a','b'], 'bc'));
    t.ok(func(['a','b'], 'cb'));
    t.notOk(func(['ab','bc'], 'cba'));
    t.end()
});
