export const getDataStore = () => {
  const todoList = JSON.parse(localStorage.getItem('todo'));
  return (Array.isArray(todoList || localStorage.getItem('todo'))) ? todoList : [];
};

export const setDataStore = (data) => localStorage.setItem('todo', JSON.stringify(data));

export const delDataStore = () => localStorage.removeItem('todo');
