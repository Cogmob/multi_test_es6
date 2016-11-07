write templated tests based on input and output data

# usage

```shell
npm install --save multi_test
```

```js
const mt = require('multi_test');

mt(
        name = 'test_name',
        glob = ['~', 'test_dir', sub_dir', '*'],
        run = (t, filename, contents) => {
            t.equal('done', contents); });
```
