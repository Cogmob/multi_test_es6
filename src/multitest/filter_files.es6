const glob = require('glob');

const filter_files = i => {
    const {glob_string, whitelist, blacklist, groups, cwd} = i;
    const files = glob.sync(glob_string, {cwd: cwd});
    return [files];
}

module.exports = filter_files;
