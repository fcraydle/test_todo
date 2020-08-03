import {createStore, combineReducers} from 'redux';
import todoPage from "./todo-reducer";

const reducers = combineReducers({
    todoPage
});

let store = createStore(reducers);

export default store;