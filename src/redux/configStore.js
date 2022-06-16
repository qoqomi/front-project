import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";
import post from "./modules/post";
import user from "./modules/user";
import { connectRouter } from "connected-react-router";
const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({
  post,
  user,
  router: connectRouter(history),
});
const store = createStore(rootReducer, enhancer);

export { history };
export default store;
