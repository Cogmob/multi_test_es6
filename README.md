# multi test

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

The purpose of this module is to write better unit tests. The inputs and
expected output can be stored on the file system cleanly. The module then
allows each of these tests to be found and loaded with minimal effort.

Suppose we have written the following function:

```es6
function prefix(i) {
    return 'pre' + i;
}
```

We might have a subfolder called 'data' containing a series of examples

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
