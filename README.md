# multi_test

write templated tests based on input and output data

# example

```es6
const mt = require('multi_test');

mt({
    path: '(a|b)*',
    test_func: (test_name, contents, tape) => {
        tape.equal('done', contents['contents']);}});
```

# usage

Multi\_test allows you to write better unit tests. For each test, store inputs
and expected outputs in separate files. Then use globbing and filtering to load
and process them with minimal effort.

Suppose you are testing the following function:

```es6
function prefix(i) {
    return 'pre-' + i;
}
```

Here are the files necessary for three tests:

```
01_none_before: ''
01_none_after: 'pre-'
02_short_before: 'a'
02_short_after: 'pre-a'
03_long_before: 'multiple\nlines'
03_long_after: 'pre-multiple\nlines'
```

Here is the code needed to perform those three tests:

```es6
mt({
    path: 'data/*before',
    make_groups: path => {
        const root = path.replace('before','');
        return {
            before: path,
            after: root + 'after'}),
    test_func: (test_name, contents, tape) => {
        tape.equal('pre-' + contents['before'], contents['after'];}});
```

A big advantage of this system, apart from brevity, is that adding further tests
does not require modifying code.

# parameters

## cwd

The starting point when searching for files. Default: '.'.

## path

A string which is pattern matched to files using globbing. This is used to find
the initial set of files before filtering. Default: '\*\*'.

## filters

An array of javascript regular expressions. Any files which match the path glob
which do not match every regex are discarded. Default: [].

## negative_filters

An array of javascript regular expressions. Any file which matches the path glob
but also matches a regex from here are discarded. Default: [].

## make_groups

A function which takes the path of a matching file after filtering, and returns
an object. The values of this object must be valid file paths.

## test_func

A function which is passed the contents of the files as specified above and the
tape testing object. It should perform a test using these.

Here is another example:

```es6
mt({
    cwd: 'subdir/subdir2',
    filters: [/^...$/],
    negative_filters: [/not/],
    make_groups: path => ({
            a: path,
            b: path + 'b'}),
    test_func: (test_name, group, tape) => {
        tape.equal('done', group['txt']);}});
```

# installation


```shell
npm install --save multi_test
```
