'use strict';

var glob = require('glob');

var filter_files = function filter_files(i) {
    var _i$path = i.path,
        path = _i$path === undefined ? '**' : _i$path,
        _i$filters = i.filters,
        filters = _i$filters === undefined ? [] : _i$filters,
        _i$negative_filters = i.negative_filters,
        negative_filters = _i$negative_filters === undefined ? [] : _i$negative_filters,
        _i$make_groups = i.make_groups,
        make_groups = _i$make_groups === undefined ? '' : _i$make_groups,
        _i$cwd = i.cwd,
        cwd = _i$cwd === undefined ? '.' : _i$cwd;

    var files = glob.sync(path, { cwd: cwd });
    files = files.filter(function (filename) {
        return filters.reduce(function (acc, regex) {
            return acc && regex.test(filename);
        }, true);
    });
    files = files.filter(function (filename) {
        return negative_filters.reduce(function (acc, regex) {
            return acc && !regex.test(filename);
        }, true);
    });
    if (make_groups === '') {
        return files.map(function (i) {
            return { all: i };
        });
    }
    return files.map(make_groups);
};

module.exports = filter_files;