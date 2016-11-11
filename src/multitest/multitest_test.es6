const tape_module = require('tape');
const multitest = require('./multitest');

const path = 'src/multitest';

tape_module.test('four tests', t => {
    t.plan(5);

    const fake_tape = {
        test: (name, func) => {func(fake_tape)},
        end: () => t.ok(true)};

    multitest.multitest(
        fake_tape,
        {
            cwd: path + '/test_data',
            filters: [/^...$/],
            negative_filters: [/not/],
            make_groups: path => ({
                    a: path,
                    b: path + 'b'}),
            test_func: (i) => {
                const {test_name, group, tape} = i;
                console.log('asdf')
                console.log(group);
                t.ok(['aaa', 'bbb'].includes(test_name));
                t.deepEqual(group, {
                    aaa: {
                        a: {contents: 'contentsaaa\n', filename: 'aaa'},
                        b: {contents: 'contentsaaab\n', filename: 'aaab'}},
                    bbb: {
                        a: {contents: 'contentsbbb\n', filename: 'bbb'},
                        b: {contents: 'contentsbbbb\n', filename: 'bbbb'}}}[
                           test_name]);}});});
