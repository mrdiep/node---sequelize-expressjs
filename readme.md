issues:
https://github.com/flexxnn/sequelize-auto-migrations/issues/65

pg_dump --dbname=postgresql://postgres:123@127.0.0.1:5432/BikeStoreDemo > D:\postgres-bike-demo.sql

step:
1) run migrate:exec
2) run seed:all
3) run migration (if any)
change config at ./database/config


DB: https://www.sqlservertutorial.net/sql-server-sample-database/

Lib:
swagger: gen the api document
eslint: check syntax
sequelize-auto: generate the model from DB (DB First approach)
winston: logger Lib
pg: postgres client
tedious: sql server client

postman: test tool

intergrated lib: eslint + fix

sequelize:
avoid: + select findAll then filter on server.

import postman at test folder to test api

react ssr: https://redux.js.org/recipes/server-rendering#redux-on-the-server
https://reactrouter.com/web/guides/server-rendering
