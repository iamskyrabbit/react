# react
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
react tutorial
## Requirement
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
`$ ./node_modules/.bin/webpack-dev-server --content-base src --mode development`  
or  
`$ npm start`  
### Express, sequelize
- Express: framework of Node.js
  - app.js: body of Express application
  - bin/www: setting for app.js to work as server
  - public/: static contents
  - routes/: setting for routing
  - views/: template engine
- sequelize: O/R mapper to map Object to DB
  - config/config.json: configuration
  - migrations/: scripts for DB migration
  - models/: ?
  - seeders/: scripts to create seed, DB data for tests 
```
$ npm install --save express
$ npm install --save sequelize sequelize-cli
$ npm install --save mysql2
```
**create skeleton of Express application**  
```
$ npm install -g express-generator
$ express --view=pug myapp
```
**initialize DB configurations**  
`$ node_modules/.bin/sequelize init`
**create model**
`$ node_modules/.bin/sequelize model:create`
**migrate to create model in DB**
```
$ node_modules/.bin/sequelize db:migrate
OPTION
  --env [environment]: development, test or production(?)
```
## How to use