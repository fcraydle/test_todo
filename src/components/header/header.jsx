import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../todo/todo.module.css';
import { delDataStore } from '../../utils/requests';

const Header = ({ resetData }) => {
  const resetList = useCallback(() => {
    const ans = window.confirm('Reset list?');
    if (ans) {
      delDataStore();
      resetData();
    }
  }, [resetData]);

  return (
    <div className={styles.header}>
      <p>Sklerontina</p>
      <button type="button" onClick={resetList}>Reset list</button>
    </div>
  );
};

Header.propTypes = {
  resetData: PropTypes.func,
};

export default Header;
