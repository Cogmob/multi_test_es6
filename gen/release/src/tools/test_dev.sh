#!/bin/bash
cd ../../gen/dev
clear
node_modules/.bin/tape src/**/*$1 | node_modules/.bin/tap-difflet -p
