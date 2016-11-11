const tape_module = require('tape');
const filter_files = require('./filter_files');
const load_files = require('./load_files');

const multitest = (t, i) => {
    const {
        path, filters, negative_filters, make_groups, cwd, test_func} = i;

    load_files(cwd, filter_files(i), groups => {
        groups.forEach(group => {
            const test_name = group[Object.keys(group)[0]]['filename'];
            t.test(test_name, a => test_func(test_name, group, a));});});

    t.end();
};

const tape = i => multitest(tape_module, i);

module.exports = {multitest, tape};
