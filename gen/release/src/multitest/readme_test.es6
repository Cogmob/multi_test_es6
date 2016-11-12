const mt = require('./multitest').tape;
const tape_module = require('tape');

function prefix(i) {
    return 'pre-' + i;
}

mt({
    path: 'src/multitest/readme_data/*before',
    make_groups: path => {
        const root = path.replace('before', '');
        return {
            before: path,
            after: root + 'after'};},
    test_func: (test_name, contents, tape) => {
        tape.equal(
            prefix(contents['before']['contents']),
            contents['after']['contents']);}});
