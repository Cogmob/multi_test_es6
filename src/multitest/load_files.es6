const read_files = require('read-multiple-files');
const get_filenames = require('./get_filenames');

const load_files_test = (groups, cb) => {
    const filenames = get_filenames(groups);
    read_files(filenames, 'utf8', (err, contents) => {
        const zipped = filenames.reduce((a, k, i) => {
            a[k] = contents[i];
            return a;}, {});

        groups = groups.map(group => {
            return Object.keys(group).reduce((a, key) => {
                a[key] = zipped[group[key]];
                return a;}, {})});

        cb(groups)});};

module.exports = load_files_test;
