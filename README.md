write templated tests based on input and output data

# usage

```shell
npm install --save multi_test
```

```es6
const mt = require('multi_test');

mt(
        glob: ['~', 'test_dir', 'sub_dir', '*'],
        groups: ['*txt', '*/', '*2.cpp'],
        white_list: ['04'],
        black_list: ['green'],
        run: (t, result_filenames, result_contents) => {
            t.equal('done', result_contents['txt']);});
```
