#!/bin/bash
mkdir -p ../../gen/dev
cp ../npm/gulpfile.js ../../gen/dev
cd ../../gen/dev
cp ../../src/npm/package.json .
rm -rf src
node_modules/.bin/gulp build_dev
