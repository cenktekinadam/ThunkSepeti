import { applyMiddleware, combineReducers, createStore } from "redux";
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducers";
import { thunk } from "redux-thunk";
import restourantReducer from "./reducers/restourantReducer";

const rootReducer = combineReducers({
    cart: basketReducer, products: productReducer, restourants: restourantReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;