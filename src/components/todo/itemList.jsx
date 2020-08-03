import React, {useState} from "react";
import styles from "./todo.module.css"
import icDown from "../../assets/ic-list-down.svg";
import icUp from "../../assets/ic-list-up.svg";
import icDone from "../../assets/ic-done.svg";
import icDelete from "../../assets/ic-delete.svg";
import {useDispatch} from "react-redux";
import {workflowActions} from '../../redux/workflowActions';

const makeClass = (date, completed) => {
    let res;
    let date1 = new Date(date);
    let date2 = Date.now();
    let timeDiff = Math.abs(date1.getTime() - date2);
    let diffDays = Math.floor(timeDiff / (1000 * 3600));
    switch (true) {
        case (completed === true):
            res = 'completed';
            break;
        case (diffDays > 36):
            res = 'more_time';
            break;
        case (diffDays >= 12):
            res = 'time_has_come_task';
            break;
        default:
            res = 'hot_task';
    }
    return res;
}

const ItemList = (props) => {
    const dispatch = useDispatch();
    const [changeTodo, setChangeTodo] = useState({title: '', date: '', description: '', type: ''})
    const [editMode, setEditMode] = useState(false);
    const [hide, setHide] = useState(true);

    const activateMode = () => {
        setEditMode(true);
        setChangeTodo({title: props.title, date: props.date, description: props.description, type: props.type})
    }

    const deactivateMode = () => {
        setEditMode(false);
        dispatch(workflowActions.changeValue({...changeTodo, id: props.id}));
        setChangeTodo({title: '', date: '', description: '', type: ''});
    }

    return (<>
            {(!editMode) ?
                <>
                    <tr onDoubleClick={activateMode} className={styles[makeClass(props.date, props.completed)]}>
                        <td><input type="checkbox"
                                   checked={props.completed}
                                   onChange={() => {
                                       dispatch(workflowActions.setCompleted(props.id))
                                   }}/></td>
                        <td className={styles[makeClass(props.date, props.completed)]}>{props.title}</td>
                        <td>{props.type}</td>
                        <td>{props.date}<img src={(hide) ? icDown : icUp}
                                             onClick={() => {setHide(!hide)}} alt="show"/></td>
                        <td className={styles.del_col}><img onClick={() => dispatch(workflowActions.delData(props.id))}
                                                            src={icDelete} alt="del"/></td>
                    </tr>
                    <tr onDoubleClick={activateMode} className={(hide) ? styles.hide : styles.show_row}>
                        <td colSpan="4">{props.description}</td>
                    </tr>
                </>
                : <>
                    <tr onDoubleClick={activateMode} className={styles[makeClass(props.date, props.completed)]}>
                        <td><input type="checkbox" checked={props.completed}
                                   onChange={() => {
                                       dispatch(workflowActions.setCompleted(props.id))
                                   }}/></td>
                        <td><input  onChange={e => setChangeTodo({...changeTodo, title: e.target.value})}
                                   value={changeTodo.title}
                                    className={styles.change_form}/></td>
                        <td>
                            <select   className={styles.change_form} defaultValue={props.type}
                                    onChange={e => setChangeTodo({...changeTodo, type: e.target.value})}>
                                <option value='work'> work</option>
                                <option value='personal'> personal</option>
                            </select></td>
                        <td><input  className={styles.change_form} type="datetime-local"
                                   onChange={e => setChangeTodo({...changeTodo, date: e.target.value})}
                                   value={changeTodo.date}/> <img src={(hide) ? icDown : icUp}
                                                             onClick={() => {setHide(!hide)}} alt="show"/></td>
                        <td className={styles.del_col}>
                            <img onClick={deactivateMode} src={icDone} alt="done"/>
                        </td>
                    </tr>
                    <tr onDoubleClick={activateMode} className={(hide) ? styles.hide : styles.show_row}>
                        <td colSpan="4"><textarea type="text"
                                                  className={styles.change_form}
                                                  onChange={e => setChangeTodo({...changeTodo, description: e.target.value})}
                                                  value={changeTodo.description}/></td>
                    </tr>
                </>}
        </>)
}

export default ItemList;