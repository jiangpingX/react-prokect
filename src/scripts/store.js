


import {createStore,applyMiddleware} from "redux";

import {reducers} from "./reducers";

import thunk from "redux-thunk";
import promise from "redux-promise";

const store = createStore(reducers,applyMiddleware(thunk,promise));

const state = store.getState();

export default store;