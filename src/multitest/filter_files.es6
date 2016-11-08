const glob = require('glob');

filter_files = (
        glob_string,
        whitelist,
        blacklist,
        groups) => {
    const files = glob.sync(glob_string);
}
