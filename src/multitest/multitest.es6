const tape_module = require('tape');
const filter_files = require('./filter_files');
const load_files = require('./load_files');

const multitest = (t, i) => {
    const {cwd = '.', test_func} = i;

    load_files(cwd, filter_files(i), groups => {
        groups.forEach(group => {
            const keys = Object.keys(group);
            const test_name = group[keys[0]]['filename'];
            if (keys.length === 1) {
                group = group[keys[0]]; }
            const wrapped_test_func = a => {
                test_func(test_name, group, a);
                a.end();};
            t.test(test_name, wrapped_test_func);});});
};

const tape = i => multitest(tape_module, i);

module.exports = {multitest, tape};
