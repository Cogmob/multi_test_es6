const read_files = require('read-multiple-files');
const get_filenames = require('./get_filenames');
const path = require('path');

const load_files_test = (cwd, groups, cb) => {
    const filenames = get_filenames(groups);
    const full_filenames = filenames.map(i => path.join(cwd, i));
    read_files(full_filenames, 'utf8', (err, contents) => {
        const zipped = filenames.reduce((a, k, i) => {
            a[k] = contents[i];
            return a;}, {});

        groups = groups.map(group => {
            return Object.keys(group).reduce((a, key) => {
                a[key] = {
                    filename: group[key],
                    contents: zipped[group[key]]};
                return a;}, {})});

        cb(groups)});};

module.exports = load_files_test;
