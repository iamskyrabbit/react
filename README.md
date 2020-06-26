# react
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![RRCWT](https://github.com/iamskyrabbit/react/workflows/react/badge.svg)](https://github.com/iamskyrabbit/react/actions)
[![Docker: mysql](http://img.shields.io/badge/Docker-mysql-blue.svg)](mysql/Dockerfile)
## Requirement
- Node.js: server-side JavaScript platform
- npm: Node.js package manager
  - [https://nodejs.org/](https://nodejs.org/)
- docker, docker-compose: developmental platform for virtualization
### webpack, babel, React.js
- webpack: module bundler to bundle JavaScript files for usage in a browser
- babel: JavaScript compiler
- React: JavaScript library for interactive UI
  - [https://reactjs.org/](https://reactjs.org/)
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
### MySQL
1. build image
`$ docker-compose build`
2. create container
`$ docker-compose up -d`
3. log-in container
`$ docker exec -it react_mysql_1 bash -p`
4. launch mysql
`root@(snip):/# mysql -u root -p -h 127.0.0.1`
#### no docker-compose ver.
1. install image
`$ docker pull mysql:latest`
2. create container
`$ docker run -it --name test-wolrd-mysql -e MYSQL_ROOT_PASSWORD=mysql -d mysql:latest`
3. log-in container
`$ docker exec -it test-wolrd-mysql bash -p`
4. launch mysql
`root@(snip):/# mysql -u root -p -h 127.0.0.1`
### Express, sequelize
- Express: framework of Node.js
  - [http://expressjs.com/](http://expressjs.com/)
  - app.js: body of Express application
  - bin/www: setting for app.js to work as server
  - public/: static contents
  - routes/: setting for routing
  - views/: template engine
- sequelize: O/R mapper to map Object to DB
  - [http://docs.sequelizejs.com/](http://docs.sequelizejs.com/)
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