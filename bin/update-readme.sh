#!/bin/bash

readonly REPO_ROOT=$(cd $(dirname ${BASH_SOURCE:-$0})/..; pwd)
readonly TARGET=$REPO_ROOT/README.md

cat << EOT > $TARGET
# hosted-by-github-io
ちょろっと書いた即席ツールとか

## Where?

https://yajamon.github.io/hosted-by-github-io/

## Containts

EOT

for p in $(find . -name '*.html')
do
    title=$(grep -m 1 'title' "$p" | perl -pE 's/.*<title>(.*)<\/title>.*/$1/')

    echo "- [$title]($p)" >> $TARGET
done