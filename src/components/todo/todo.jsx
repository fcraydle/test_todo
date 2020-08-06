import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './todo.module.css';
import TodoList from './todoList';
import { addData, setSort } from '../../redux/workflowActions';
import AddTodo from './addTodo';

const Todo = ({ data, dispatchAddData, dispatchSetSort }) => (
  <div className={styles.container}>
    <AddTodo addData={dispatchAddData} />
    <TodoList data={data} setSort={dispatchSetSort} />
  </div>
);
Todo.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    complete: PropTypes.bool,
    type: PropTypes.string,
    date: PropTypes.string,
  })),
  dispatchAddData: PropTypes.func,
  dispatchSetSort: PropTypes.func,
};
const mapStateToProps = (state) => ({
  data: state.todoPage.data,
});
const mapDispatchToProps = {
  dispatchAddData: addData,
  dispatchSetSort: setSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
