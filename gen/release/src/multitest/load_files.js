'use strict';

var read_files = require('read-multiple-files');
var get_filenames = require('./get_filenames');
var path = require('path');

var load_files_test = function load_files_test(cwd, groups, cb) {
    var filenames = get_filenames(groups);
    var full_filenames = filenames.map(function (i) {
        return path.join(cwd, i);
    });
    read_files(full_filenames, 'utf8', function (err, contents) {
        var zipped = filenames.reduce(function (a, k, i) {
            a[k] = contents[i];
            return a;
        }, {});

        groups = groups.map(function (group) {
            return Object.keys(group).reduce(function (a, key) {
                a[key] = {
                    filename: group[key],
                    contents: zipped[group[key]] };
                return a;
            }, {});
        });

        cb(groups);
    });
};

module.exports = load_files_test;