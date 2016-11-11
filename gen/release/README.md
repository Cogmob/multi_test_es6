write templated tests based on input and output data

# usage

```shell
npm install --save multi_test
```

```es6
const mt = require('multi_test');

mt({
    path: '(a|b)*',
    test_func: (test_name, contents, tape) => {
        tape.equal('done', contents['contents']);}});
```

# longer example

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
