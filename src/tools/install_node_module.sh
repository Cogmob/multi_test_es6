#!/bin/bash
cd ../../gen/dev
npm install $1 $2
cp package.json ../../src/npm
