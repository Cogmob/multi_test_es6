#!/bin/bash
cd ../../gen/dev
root_path="s/$(git rev-parse --show-toplevel | sed 's/\//\\\//g')\///g"
echo $root_path
file_path="$(echo $2 | sed 's/\.es6/\.js/g' | sed $root_path)"
echo $file_path
tmux send-keys -t node-vim-inspector C-c
tmux send-keys -t node-vim-inspector "cd $1" Enter
tmux send-keys -t node-vim-inspector "node debug $file_path" Enter
node-vim-inspector
