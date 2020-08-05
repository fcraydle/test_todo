export const getDataStore = () => {
  if (localStorage.getItem('todo')) {
    const todoList = JSON.parse(localStorage.getItem('todo'));
    if (Array.isArray(todoList)) return (todoList);
  } else return [];
};

export const setDataStore = (data) => {
  localStorage.setItem('todo', JSON.stringify(data));
};
