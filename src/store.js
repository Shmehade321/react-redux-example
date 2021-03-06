import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getParksReducer, getParkDetailsReducer } from "./parkReducers";

const reducer = combineReducers({
  parkList: getParksReducer,
  parkDetails: getParkDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
