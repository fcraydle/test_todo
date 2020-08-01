import React, {useState} from "react";
import s from "./todo.module.css"
import icDown from "../../assets/ic-list-down.svg";
import icUp from "../../assets/ic-list-up.svg";
import icDone from "../../assets/ic-done.svg";
import icDelete from "../../assets/ic-delete.svg";

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
    const [editMode, setEditMode] = useState(false);
    const [todoValue, setTodoValue] = useState({
        type: props.type,
        title: props.title,
        description: props.description,
        date: props.date,
        id: props.id
    });
    const [hide, setHide] = useState(true);


    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.changeValue(todoValue);
    }

    return (
        <>
            {(!editMode) ?
                <><tr onDoubleClick={activateMode} className={s[makeClass(todoValue.date, props.completed)]}>
                        <td><input type="checkbox"
                            checked={props.completed}
                            onChange={() => {props.setCompleted(todoValue.id)}}/></td>
                        <td className={s[makeClass(props.date, props.completed)]}>{todoValue.title}</td>
                        <td>{todoValue.type}</td>
                        <td>{todoValue.date}<img src={(hide) ? icDown : icUp}
                                                 onClick={() => {setHide(!hide)}} alt="show"/></td>
                        <td className={s.del_col}><img
                            onClick={() => props.delData(todoValue.id)} src={icDelete} alt="del"/></td>
                    </tr>
                    <tr onDoubleClick={activateMode} className={(hide) ? s.hide : s.show_row}>
                        <td colSpan="4">{todoValue.description}</td>
                    </tr>
                </>
                : <>
                    <tr onDoubleClick={activateMode} className={s[makeClass(todoValue.date, props.completed)]}>
                        <td><input type="checkbox" checked={props.completed}
                                   onChange={() => {props.setCompleted(todoValue.id)}}/></td>
                        <td><input onChange={e => setTodoValue({...todoValue, title: e.target.value})}
                                   value={todoValue.title}
                                   className={s[makeClass(todoValue.date, todoValue.completed)]}/></td>
                        <td>
                            <select defaultValue={todoValue.type}
                                    onChange={e => setTodoValue({...todoValue, type: e.target.value})}>
                                <option value='work'> work</option>
                                <option value='personal'> personal</option></select></td>
                        <td><input type="datetime-local"
                                   onChange={e => setTodoValue({...todoValue, date: e.target.value})}
                                   value={todoValue.date}/> <img src={(hide) ? icDown : icUp}
                                                                 onClick={() => {setHide(!hide)}} alt="show"/></td>
                        <td className={s.del_col}>
                            <img onClick={deactivateMode} src={icDone} alt="done"/>
                        </td>
                    </tr>
                    <tr onDoubleClick={activateMode} className={(hide) ? s.hide : s.show_row}>
                        <td colSpan="4"><textarea type="text"
                                                  onChange={e => setTodoValue({...todoValue, description: e.target.value})}
                                                  value={todoValue.description}/></td>
                    </tr>
                </>}
        </>)
}

export default ItemList;