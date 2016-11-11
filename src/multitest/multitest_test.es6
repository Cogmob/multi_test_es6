const tape_module = require('tape');
const multitest = require('./multitest');
const p = require('path');

const path = p.join('src', 'multitest');

tape_module.test('two groups', t => {
    t.plan(6);

    const fake_tape = {
        test: (name, func) => {func(fake_tape)},
        end: () => t.ok(true)};

    multitest.multitest(
        fake_tape,
        {
            cwd: p.join(path, 'test_data'),
            filters: [/^...$/],
            negative_filters: [/not/],
            make_groups: path => ({
                    a: path,
                    b: path + 'b'}),
            test_func: (test_name, group, tape) => {
                t.ok(['aaa', 'bbb'].includes(test_name));
                t.deepEqual(group, {
                    aaa: {
                        a: {contents: 'contentsaaa\n', filename: 'aaa'},
                        b: {contents: 'contentsaaab\n', filename: 'aaab'}},
                    bbb: {
                        a: {contents: 'contentsbbb\n', filename: 'bbb'},
                        b: {contents: 'contentsbbbb\n', filename: 'bbbb'}}}[
                           test_name]);}});});

tape_module.test('one group', t => {
    t.plan(6);

    const fake_tape = {
        test: (name, func) => {func(fake_tape)},
        end: () => t.ok(true)};

    multitest.multitest(
        fake_tape,
        {
            cwd: p.join(path, 'test_data'),
            filters: [/^...$/],
            negative_filters: [/not/],
            test_func: (test_name, group, tape) => {
                t.ok(['aaa', 'bbb'].includes(test_name));
                t.deepEqual(group, {
                    'aaa': {contents: 'contentsaaa\n', filename: 'aaa'},
                    'bbb': {contents: 'contentsbbb\n', filename: 'bbb'}}[
                        test_name]);}});});
