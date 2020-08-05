import React from 'react';
import styles from '../todo/todo.module.css';
import PropTypes from 'prop-types';

const Header = ({ resetData }) => {
  const resetList = () => {
    const ans = window.confirm('Reset list?');
    if (ans) {
      localStorage.removeItem('todo');
      resetData();
    }
  };

  return (

    <div className={styles.header}>
      <p>Sklerontina</p>
      <button onClick={resetList}>Reset list</button>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.array,
  resetData: PropTypes.func,
};

export default Header;
