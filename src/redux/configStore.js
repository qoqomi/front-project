// import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {createStore, combineReducers, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
import user from "./modules/user";
import post from "./modules/post";

// const middlewares = [thunk];
const rootReducer = combineReducers({user, post});
// const enhancer = applyMiddleware(...middlewares);

// const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer);

export default store;