import { createStore, combineReducers, applyMiddleware } from "redux";
import { todosReducer, currentViewReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({ todos: todosReducer, currentView: currentViewReducer });

const store = createStore(reducers /**Used with Redux DevToosl */, composeWithDevTools(applyMiddleware(thunk)));

export default store;
