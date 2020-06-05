import {createStore} from 'redux';
import reducer from '../reducers/index';

const store = createStore(reducer);

export default store;

// import {createStore, applyMiddleware} from 'redux';
// import reducer from '../reducers/index';

// const middlewares = [];
// // eslint-disable-next-line no-undef
// if (__DEV__) {
//   const FlipperMiddleware = require('redux-flipper').default;
//   middlewares.push(FlipperMiddleware());
// }

// const store = createStore(reducer, applyMiddleware(...middlewares));

// export default store;
