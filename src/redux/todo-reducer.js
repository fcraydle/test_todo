export const SET_DATA = 'SET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const RESET_DATA = 'RESET_DATA';
export const SET_SORT = 'SET_SORT';
export const SET_COMPLETED = 'SET_COMPLETED';
export const DEL_DATA = 'DEL_DATA';
export const CHANGE_VALUE = 'CHANGE_VALUE';

const initialState = {
  data: [],
};

const todoReducer = (state = initialState, action) => {
  let copy;
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, {
          id: Date.now(),
          title: action.data.title,
          description: action.data.description,
          completed: false,
          date: action.data.date,
          type: action.data.type,
        }],
      };
    case DEL_DATA:
      return { ...state, data: state.data.filter((elem) => elem.id !== action.data) };

    case RESET_DATA:
      return {
        ...state,
        data: [],
      };
    case SET_SORT:
      copy = state.data.map((a) => a);
      copy = copy.sort((a, b) => {
        if (a[action.data.param] > b[action.data.param]) return 1;
        if (a[action.data.param] < b[action.data.param]) return -1;
        return 0;
      });
      if (action.data.up) copy.reverse();
      return { data: [...copy] };

    case SET_COMPLETED:
      return {
        ...state,
        data: state.data.map((e) => {
          if (e.id === action.data) return { ...e, completed: !e.completed };
          return e;
        }),
      };
    case CHANGE_VALUE:
      return {
        ...state,
        data: state.data.map((e) => {
          if (e.id === action.data.id) {
            return {
              ...e,
              title: action.data.title,
              description: action.data.description,
              date: action.data.date,
              type: action.data.type,
            };
          }
          return e;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
