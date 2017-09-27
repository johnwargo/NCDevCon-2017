#!/bin/sh
updateStr="Updated "
updateStr+=date
updateStr+=" "
updateStr+=time
git add -A :/
git commit -m "${updateStr}"
git push
