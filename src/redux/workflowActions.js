import {
  ADD_DATA, CHANGE_VALUE, DEL_DATA, RESET_DATA, SET_COMPLETED, SET_DATA, SET_SORT,
} from './todo-reducer';

export const setData = (data) => ({ type: SET_DATA, data });
export const addData = (data) => ({ type: ADD_DATA, data });
export const resetData = () => ({ type: RESET_DATA });
export const setSort = (data) => ({ type: SET_SORT, data });
export const setCompleted = (data) => ({ type: SET_COMPLETED, data });
export const changeValue = (data) => ({ type: CHANGE_VALUE, data });
export const delData = (data) => ({ type: DEL_DATA, data });
