import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './todo.module.css';
import TodoList from './todoList';
import { addData as dispatchAddData, setSort as dispatchSetSort }
  from '../../redux/workflowActions';
import AddTodo from './addTodo';

const Todo = ({ data, addData, setSort }) => (
  <div className={styles.container}>
    <AddTodo addData={addData} />
    <TodoList data={data} setSort={setSort} />
  </div>
);
Todo.propTypes = {
  data: PropTypes.array,
  addData: PropTypes.func,
  setSort: PropTypes.func,
};
const mapStateToProps = (state) => ({
  data: state.todoPage.data,
});
const mapDispatchToProps = {
  addData: dispatchAddData,
  setSort: dispatchSetSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
