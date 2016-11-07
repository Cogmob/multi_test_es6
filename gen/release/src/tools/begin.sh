#!/bin/bash
echo 'replace text in these files:'
cd ../..
git grep -l "\[\[replace" | sed 's/^/-\ /g'
