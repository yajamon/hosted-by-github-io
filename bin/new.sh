#!/bin/bash

readonly REPO_ROOT=$(cd $(dirname ${BASH_SOURCE:-$0})/..; pwd)

usage() {
    cat << EOT 1>&2
new.sh

USAGE:
    $0 new-tool-name
EOT
}

if [ -z "$1" ] ; then
    usage
    exit 1
fi

readonly TARGET="$REPO_ROOT/$1"
mkdir -pv $TARGET

cat << EOT > "$TARGET/index.html"
<!doctype html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <style>
        </style>
        <script src="./main.js" defer></script>
    </head>
    <body>

        <hr />
        <a href="https://yajamon.github.io/hosted-by-github-io/">TOP</a>
    </body>
</html>
EOT
echo "$TARGET/index.html" 1>&2

: > "$TARGET/main.js"
echo "$TARGET/main.js" 1>&2
