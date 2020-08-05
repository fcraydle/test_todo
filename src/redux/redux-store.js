import { createStore, combineReducers } from 'redux';
import todoPage from './todo-reducer';

const rootReducers = combineReducers({
  todoPage,
});

export default createStore(rootReducers);
