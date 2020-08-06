import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './todo.module.css';
import icDown from '../../assets/ic-list-down.svg';
import icUp from '../../assets/ic-list-up.svg';
import icDone from '../../assets/ic-done.svg';
import icDelete from '../../assets/ic-delete.svg';
import makeClass from '../../utils/makeClass';
import { changeValue, setCompleted, delData } from '../../redux/workflowActions';

const ItemList = ({
  elem, dispatchChangeValue, dispatchSetCompleted, dispatchDelData,
}) => {
  const [changeTodo, setChangeTodo] = useState({
    title: '', date: '', description: '', type: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [hide, setHide] = useState(true);

  const activateMode = () => {
    setEditMode(true);
    setChangeTodo({
      title: elem.title, date: elem.date, description: elem.description, type: elem.type,
    });
  };

  const deactivateMode = () => {
    setEditMode(false);
    dispatchChangeValue({ ...changeTodo, id: elem.id });
    setChangeTodo({
      title: '', date: '', description: '', type: '',
    });
  };

  return (
    <>
      {!editMode && (
      <>
        <tr
          onDoubleClick={activateMode}
          className={styles[makeClass(elem.date, elem.completed)]}
        >
          <td>
            <input
              type="checkbox"
              checked={elem.completed}
              onChange={() => {
                dispatchSetCompleted(elem.id);
              }}
            />
          </td>
          <td className={styles[makeClass(elem.date, elem.completed)]}>{elem.title}</td>
          <td>{elem.type}</td>
          <td>
            {elem.date}
            <img
              src={(hide) ? icDown : icUp}
              onClick={() => {
                setHide(!hide);
              }}
              alt="show"
            />
          </td>
          <td className={styles.del_col}>
            <img
              onClick={() => dispatchDelData(elem.id)}
              src={icDelete}
              alt="del"
            />
          </td>

        </tr>
        <tr onDoubleClick={activateMode} className={(hide) ? styles.hide : styles.show_row}>
          <td colSpan="4">{elem.description}</td>
        </tr>
      </>
      )}
      {editMode
          && (
          <>
            <tr
              onDoubleClick={activateMode}
              className={styles[makeClass(elem.date, elem.completed)]}
            >
              <td>
                <input
                  type="checkbox"
                  checked={elem.completed}
                  onChange={() => { dispatchSetCompleted(elem.id); }}
                />
              </td>
              <td>
                <input
                  onChange={(e) => setChangeTodo({ ...changeTodo, title: e.target.value })}
                  value={changeTodo.title}
                  className={styles.change_form}
                />
              </td>
              <td>
                <select
                  className={styles.change_form}
                  defaultValue={elem.type}
                  onChange={(e) => setChangeTodo({ ...changeTodo, type: e.target.value })}
                >
                  <option value="work"> work</option>
                  <option value="personal"> personal</option>
                </select>
              </td>
              <td>
                <input
                  className={styles.change_form}
                  type="datetime-local"
                  onChange={(e) => setChangeTodo({ ...changeTodo, date: e.target.value })}
                  value={changeTodo.date}
                />
                {' '}
                <img
                  src={(hide) ? icDown : icUp}
                  onClick={() => { setHide(!hide); }}
                  alt="show"
                />
              </td>
              <td className={styles.del_col}>
                <img onClick={deactivateMode} src={icDone} alt="done" />
              </td>
            </tr>
            <tr onDoubleClick={activateMode} className={(hide) ? styles.hide : styles.show_row}>
              <td colSpan="4">
                <textarea
                  type="text"
                  className={styles.change_form}
                  onChange={(e) => setChangeTodo({ ...changeTodo, description: e.target.value })}
                  value={changeTodo.description}
                />
              </td>
            </tr>
          </>
          )}
    </>
  );
};
ItemList.propTypes = {
  elem: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    complete: PropTypes.bool,
    type: PropTypes.string,
    date: PropTypes.string,
  }),
  dispatchChangeValue: PropTypes.func,
  dispatchDelData: PropTypes.func,
  dispatchSetCompleted: PropTypes.func,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  dispatchChangeValue: changeValue,
  dispatchSetCompleted: setCompleted,
  dispatchDelData: delData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
