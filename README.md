[![Build Status](https://travis-ci.org/anupvarghese/redux-notifications-middleware.svg?branch=master)](https://travis-ci.org/anupvarghese/redux-notifications-middleware)
[![npm version](https://badge.fury.io/js/redux-notifications-middleware.svg)](https://badge.fury.io/js/redux-notifications-middleware)
[![Coverage Status](https://coveralls.io/repos/github/anupvarghese/redux-notifications-middleware/badge.svg?branch=master)](https://coveralls.io/github/anupvarghese/redux-notifications-middleware?branch=master)

## Notification middleware for redux

A simple middleware for handling notifications using redux store

#### How to use

- install package `yarn add redux-notification-middleware`

#### Steps to add middleware

- Add reducer

```
import { combineReducers } from 'redux';
import { notificationReducer } from 'redux-notification-middleware';

const reducer = combineReducers({
  // app reducers
  notification: notificationReducer,
});
```

- Keep list of actions to show notifications

```
import C from './constants';

export default [
  'LOGIN_ACTION',
  'FETCH_PRODUCT_ACTION',
  ...
];
```

- Add middleware to store with events
```
import { createStore, applyMiddleware } from 'redux';
import { notificationMiddleware } from 'redux-notification-middleware';
import notificationEvents from './notification_actions';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(notificationMiddleware(notificationEvents))
);
...
```

In the actions we can now supply notification payload and delay

For eg:-
```
{
  type: 'FETCH_PRODUCT_SUCCESS',
  payload: 'Successfully fetched products',
  delay: 2000,
}
```

Notification states will be available in the redux store and can be consumed in any connected containers
