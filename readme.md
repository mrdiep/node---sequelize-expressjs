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


thank for ES6.
I copy style in the react typescript project that action / reducer is mostly same place.

Dev: What the hell of middlware, what the hell of saga, thunk...
developer just care about bussiness more than crazy think how redux flow work


refer class: orders/actions/index to understand how wrap the the function

import { createActionByName } from './index'

import displayLoadingIndicator from './displayLoadingIndicator';

export default class requestAddToCard extends BaseAction {
  async runMiddleware(payload) {
    console.log('pay me a coffee. hehe\r\npayload=', JSON.stringify(payload, null, 2))

    this.pushAction(createActionByName(displayLoadingIndicator.name)({ show: true }));

    const assumeApiResponseData = await new Promise((s, r) => {
      setTimeout(() => {

        this.pushAction(createActionByName(displayLoadingIndicator.name)({ show: false }));
        s(1);
      }, 3000);
    });

    return assumeApiResponseData;
  }

  update(currentState, payload) {
    currentState.cartItemCounter = currentState.cartItemCounter + payload
  }
}