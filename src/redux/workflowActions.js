import {ADD_DATA, CHANGE_VALUE, DEL_DATA, RESET_DATA, SET_COMPLETED, SET_DATA, SET_SORT} from "./todo-reducer";

export const workflowActions = {
    setData: data => ({type:SET_DATA, data}),
    addData: data => ({type:ADD_DATA, data}),
    resetData: () => ({type:RESET_DATA}),
    setSort: (data) => ({type:SET_SORT, data}),
    setCompleted: (data) => ({type:SET_COMPLETED, data}),
    changeValue: (data) => ({type:CHANGE_VALUE, data}),
    delData: (data) => ({type: DEL_DATA, data})
}