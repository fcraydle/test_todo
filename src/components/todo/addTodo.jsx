import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './todo.module.css';
import getDate from '../../utils/getDate';

const AddTodo = ({ addData }) => {
  const [todoValue, setTodoValue] = useState({
    type: 'work', title: '', description: '', date: getDate(),
  });

  const addTodo = useCallback(() => {
    addData(todoValue);
    setTodoValue({
      title: '', type: 'work', description: '', date: getDate(),
    });
  },
  [todoValue, addData]);
  return (
    <div className={styles.todo_form}>
      <h1>ToDo App</h1>
      <input
        type="text"
        className={styles.input_add}
        value={todoValue.title}
        placeholder=" Title task"
        onChange={(e) => setTodoValue({ ...todoValue, title: e.target.value })}
      />
      <textarea
        type="text"
        className={styles.input_add}
        value={todoValue.description}
        placeholder=" Description"
        onChange={(e) => setTodoValue({ ...todoValue, description: e.target.value })}
      />
      <input
        type="datetime-local"
        className={styles.form_date}
        value={todoValue.date}
        min={todoValue.date}
        onChange={(e) => setTodoValue({ ...todoValue, date: e.target.value })}
      />
      <div className={styles.todo_type}>
        <input
          id="type_personal"
          type="radio"
          name="type"
          value="work"
          checked={(todoValue.type === 'work')}
          onChange={(e) => setTodoValue({ ...todoValue, type: e.target.value })}
        />
        <label htmlFor="type_work">Work</label>
        <input
          checked={(todoValue.type !== 'work')}
          id="type_personal"
          type="radio"
          name="type"
          value="personal"
          onChange={(e) => setTodoValue({ ...todoValue, type: e.target.value })}
        />
        <label htmlFor="type_personal">Personal</label>
      </div>
      <button
        disabled={todoValue.title === ''}
        onClick={addTodo}
        className={styles.btn_add}
      >
        Add
      </button>
    </div>
  );
};
AddTodo.propTypes = {
  addData: PropTypes.func,
};

export default AddTodo;
