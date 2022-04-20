#!/bin/bash
mkdir build
node_modules/.bin/babel src/index.jsx --presets @babel/preset-react --out-dir build/
cp -r src/images/ build/
cp src/index.html build/
cp src/styles.css build/

