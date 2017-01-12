[![Build Status](https://travis-ci.org/anupvarghese/redux-notifications-middleware.svg?branch=master)](https://travis-ci.org/anupvarghese/redux-notifications-middleware)
[![npm version](https://badge.fury.io/js/redux-notifications-middleware.svg)](https://badge.fury.io/js/redux-notifications-middleware)

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
  notificationPayload: 'Successfully fetched products',
  notificationDelay: 2000,
}
```

Notification states will be available in the redux store and can be consumed in any connected containers


## Notification component
Import it into your project with the `hideNotification` and `removeNotification` actions.

The notification will hide and remove itself automatically, however for manually closing,
you will need to pass in a function from a connected parent component to the `handleHide` prop as actions need to be dispatched.

```javascript
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Notification, hideNotification, removeNotification } from 'redux-notifications-middleware';

// layout, effect and classPrefix props are to determine the styles of notification
// these are here in case we want to add more effects
export const Notifications = ({
  notifications,
  layout = 'growl',
  effect = 'slide',
  classPrefix = 'om',
  hide,
  remove }) => {
  const handleHide = (id) => {
    hide(n.id);
    // set a timeout if you have an animation to hide
    setTimeout(() => {
      remove(n.id);
    }, 150);
    }
  }
  const arr = notifications.map(n => (
    <Notification
      key={n.id}
      layout={layout}
      classPrefix={classPrefix}
      effect={effect}
      details={n}
      handleHide={handleHide(n.id)}
    />
  ));

  return (
    <div className="om-notifications__container">
      {arr}
    </div>
  );
};

const dispatchToProps = {
  hide: hideNotification,
  remove: removeNotification,
};

// get notifications from the state
const mapStateToProps = state => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps, dispatchToProps)(Notifications);
```


## Styles

Copy the CSS into your project or use webpack to allow for importing css from modules.