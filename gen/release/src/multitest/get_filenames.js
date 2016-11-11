"use strict";

var get_filenames = function get_filenames(groups) {
        return groups.reduce(function (a, group) {
                return a.concat(Object.keys(group).reduce(function (acc, key) {
                        acc.push(group[key]);
                        return acc;
                }, []));
        }, []);
};

module.exports = get_filenames;