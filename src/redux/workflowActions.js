

export const workflowActions = {
    setData: data => ({type: 'SET_DATA', data}),
    addData: data => ({type: 'ADD_DATA', data}),
    resetData: () => ({type: 'RESET_DATA'}),
    setSort: (param, up) => ({type: 'SET_SORT', param, up}),
    setCompleted: (id) => ({type: 'SET_COMPLETED', id}),
    changeValue: (data) => ({type: 'CHANGE_VALUE', data}),
    delData: (id) => ({type: 'DEL_DATA', id})
}