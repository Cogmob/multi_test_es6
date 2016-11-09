const glob = require('glob');
const contains_substring = require('./is_at_least_one_element_a_substring');
const glob_to_regex = require('glob-to-regexp');

const filter_files = i => {
    const {glob_string, white_list=[], black_list=[], groups=[], cwd} = i;
    var files = glob.sync(glob_string, {cwd: cwd});
	console.log(files);
	if (white_list.length !== 0) {
    	files = files.filter(e => contains_substring(white_list, e));}
    return [files];
}

module.exports = filter_files;
