import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from './itemList';
import styles from './todo.module.css';

const TodoList = ({ data, setSort }) => {
  const [sortUp, setSortUp] = useState(true);
  const [sortParam, setSortParam] = useState('');

  const checkedSort = useCallback((e) => {
    if (sortParam === e.target.value) setSortUp(!sortUp);
    else {
      setSortUp(false);
      setSortParam(e.target.value);
    }
    setSort({ param: e.target.value, up: sortUp });
  }, [sortParam, sortUp, setSort]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            status
            <input
              onClick={(e) => checkedSort(e)}
              className={(sortUp) ? styles.radio_btn : styles.radio_btn_up}
              type="radio"
              value="completed"
              name="sort"
            />
          </th>
          <th>title</th>
          <th>
            type
            <input
              onClick={(e) => checkedSort(e)}
              className={(sortUp) ? styles.radio_btn : styles.radio_btn_up}
              type="radio"
              value="type"
              name="sort"
            />
          </th>
          <th>
            date
            <input
              onClick={(e) => checkedSort(e)}
              className={(sortUp) ? styles.radio_btn : styles.radio_btn_up}
              type="radio"
              value="date"
              name="sort"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.length !== 0 && data.map((elem, i) => <ItemList key={i} elem={elem} />)}
      </tbody>
    </table>
  );
};
TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    complete: PropTypes.bool,
    type: PropTypes.string,
    date: PropTypes.string,
  })),
  setSort: PropTypes.func,
};

export default TodoList;
