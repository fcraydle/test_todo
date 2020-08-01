const SET_DATA = 'SET_DATA';
const ADD_DATA = 'ADD_DATA';
const RESET_DATA = 'RESET_DATA';
const SET_SORT = 'SET_SORT';
const SET_COMPLETED = 'SET_COMPLETED';
const DEL_DATA = 'DEL_DATA';
const CHANGE_VALUE = 'CHANGE_VALUE';

let initialState = {
    data: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        case ADD_DATA:
            return {
                ...state,
                data: [...state.data, {
                    id: Date.now(),
                    title: action.data.title,
                    description: action.data.description,
                    completed: false,
                    date: action.data.date,
                    type: action.data.type
                }]
            };
        case DEL_DATA:
            return {...state, data: state.data.filter(elem => elem.id !== action.id)}

        case RESET_DATA:
            return {
                ...state,
                data: []
            }
        case SET_SORT:
            let copy = state.data.map(a => a);
            copy = copy.sort((a, b) => (a[action.param] > b[action.param] ? 1 : -1))
            if (action.up)
            copy.reverse();

            return {data:[...copy]}

        case SET_COMPLETED:
            return {
                ...state,
                data: state.data.map(e => {
                    if (e.id === action.id)
                        return {...e, completed: !e.completed}
                    return e;
                })
            }
        case CHANGE_VALUE:
            return {
                ...state,
                data: state.data.map(e => {
                    if (e.id === action.data.id)
                        return {
                            ...e, title: action.data.title,
                            description: action.data.description,
                            date: action.data.date,
                            type: action.data.type
                        }
                    return e;
                })
            }
        default:
            return state;
    }
}

export const setData = (data) => ({type: SET_DATA, data});
export const addData = (data) => ({type: ADD_DATA, data});
export const resetData = () => ({type: RESET_DATA});
export const setSort = (param, up) => ({type: SET_SORT, param, up});
export const setCompleted = (id) => ({type: SET_COMPLETED, id})
export const changeValue = (data) => ({type: CHANGE_VALUE, data})
export const delData = (id) => ({type: DEL_DATA, id})

export default todoReducer;