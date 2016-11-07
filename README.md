write templated tests based on input and output data

# usage

```shell
npm install --save multi_test
```

```js
const mt = require('multi_test');

mt(
        glob = ['~', 'test_dir', sub_dir', '*'],
        white_list = ['04'],
        black_list = ['green'],
        run = (t, filename, contents) => {
            t.equal('done', contents); });
```
