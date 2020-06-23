# react
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
## Preparation
- Node.js: server-side JavaScript platform
- npm: Node.js package manager
### webpack, babel, React.js
- webpack: module bundler to bundle JavaScript files for usage in a browser
- babel: JavaScript compiler
- React: JavaScript library for interactive UI
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
