const mt = require('./multitest').tape;

mt({
    path: 'data/*before',
    make_groups: path => {
        const root = path.replace('before', '');
        return {
            before: path,
            after: root + 'after'};},
    test_func: (test_name, contents, tape) => {
        tape.equal(prefix(contents['before']), contents['after']);}});
