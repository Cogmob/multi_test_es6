#!/bin/bash
cd ../../gen/dev
clear
filename="$(echo $1 | sed 's/\.es6//g')"
node_modules/.bin/tape src/**/*$filename.js | node_modules/.bin/tap-difflet -p
