import {createStore, combineReducers} from 'redux';
import todoReducer from "./todo-reducer";

let reducers = combineReducers({
    todoPage: todoReducer
});
let store = createStore(reducers);
window.store = store;

export default store;