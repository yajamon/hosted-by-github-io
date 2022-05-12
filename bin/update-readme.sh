#!/bin/bash

readonly REPO_ROOT=$(cd $(dirname ${BASH_SOURCE:-$0})/..; pwd)
readonly TARGET=$REPO_ROOT/README.md

cat << 'EOT' > $TARGET
# hosted-by-github-io
ちょろっと書いた即席ツールとか

## Where?

https://yajamon.github.io/hosted-by-github-io/

## Containts

EOT

{
    for p in $(find . -name 'index.html' | sort)
    do
        title=$(grep -m 1 'title' "$p" | perl -pE 's/.*<title>(.*)<\/title>.*/$1/')

        echo "- [$title]($p)"
    done
} >> $TARGET

cat << 'EOT' >> $TARGET

## How to start

### New

```console
./bin/new.sh new-tool-name
```

### Update README.md

```console
./bin/update-readme.sh
```
EOT
