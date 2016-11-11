const get_filenames = groups => {
    return groups.reduce(
            (a, group) => {
                    return a.concat(
                            Object.keys(group).reduce(
                                    (acc, key) => {
                                        acc.push(group[key]);
                                        return acc;}, []))}, []);
};

module.exports = get_filenames;
