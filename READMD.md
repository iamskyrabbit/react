# react
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
## Preparation
- node
- npm
### webpack & babel
```
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install -g webpack webpack-cli
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
$ npm install --save-dev react react-dom
```
**build src/js/client.min.js**
`$ webpack --mode development`
**set up developmental server**
`./node_modules/.bin/webpack-dev-server --content-base src --mode development`
or
`npm start`
