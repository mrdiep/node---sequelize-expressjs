# Skeleton: React Server Side + Node Server with Postgres/SqlServer
## _This is the incopleted skeleton_

## Features BackEnd:
+ New ES style, using babel with latest preset
+ Node server using the sequelize ORM, support DB First and Model First with sample script for seed, migrate db, create model or update model from db
+ Styled OData (same as .net)
+ 3 linear tier layer: presentation, business model, data layer
+ Follow resful naming convention
+ Using common DB: https://www.sqlservertutorial.net/sql-server-sample-database
+ Swagger with auto-generator (almost same as .net)
+ Support multiple enviroment build (test.dev.prod)
+ The dyamic logger: can switch to many logger lib: current using Winston
+ Eslint + Eslint auto fix for styled *lazy* developer
+ Tech: expressjs, sequelize...

## Features ReactJs (server side rendering):
+ support router integrated with express-js server
+ support build output for both client + server.
+ LESS CODE FOR REDUX FLOW, developer dont need care about _CRAZY_ redux flow, I wrapped all in module, corrected sample is in orders module. (Copied styled in react typescript: actions + reducer in togethers)
+ Develope new features base on the module: included store, component, action inside each module
+ Tech: redux-thunk, bootstrap, immuablejs
+ babel build: can self customize, dont depend on react-scripts
## Will complete in furture:
+ integrate auth
+ integrate web socket: for realtime
+ ....

## Wellknow issue:
- still mixed between function and class.
- the naming convention still mixed between snakeCase and cammelCase
- the comment still with 'avoid this/that' still alot
- find the fixed issue in branched name: completed issue
- 
