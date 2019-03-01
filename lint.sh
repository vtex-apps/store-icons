#!/bin/bash

cd react/
[ -d node_modules ] && rm -rf node_modules
yarn cache clean
yarn
yarn lint
