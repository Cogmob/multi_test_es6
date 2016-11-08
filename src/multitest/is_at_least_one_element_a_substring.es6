const is_at_least_one_element_a_substring = (substrings, str) => {
    return substrings.reduce((has_been_found, e) => {
        if (has_been_found) {
            return true;
        }
        return str.indexOf(e) !== -1;
    }, false);
};

module.exports = is_at_least_one_element_a_substring;
