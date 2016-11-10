const read_files = require('read-multiple-files');
const get_filenames = require('./get_filenames');

const load_files_test = (groups, cb) => {
    const filenames = get_filenames(groups);
    console.log(filenames);
    read_files(filenames, 'utf8', (err, contents) => {
        console.log(contents);
        //const zipped = filenames.reduce((a, k, i) => a[k] = contents, {});
        //groups.map(group => {
        //    return Object.keys(group).reduce((a, key) => {
        //        a[key] = contents
        //cb(zipped)});
        cb([''])});
};

module.exports = load_files_test;
