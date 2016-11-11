const glob = require('glob');

const filter_files = i => {
    var {
            path = '**',
            filters = [],
            negative_filters = [],
            make_groups,
            cwd = '.'} = i;
    var files = glob.sync(path, {cwd: cwd});
   	files = files.filter(filename => filters.reduce(
            (acc, regex) => acc && regex.test(filename), true));
   	files = files.filter(filename => negative_filters.reduce(
            (acc, regex) => acc && !regex.test(filename), true));
    if (!make_groups) {
        return files.map(i => ({all: i}));}
    return files.map(make_groups);
}

module.exports = filter_files;
