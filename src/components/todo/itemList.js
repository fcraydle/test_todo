import React, {useState} from "react";
import s from "./todo.module.css"
import icDown  from "../../assets/ic-list-down.svg";
import icUp from "../../assets/ic-list-up.svg";



const ItemList = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.title);
    const [hide, setHide] = useState(true);


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

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateMode = (event) => {
        if (event.key === 'Enter') {
            setEditMode(false);
            props.renameTitle(title, props.id);
        }
    }


    return (
        <>
        <tr onDoubleClick={activateMode} onKeyPress={deactivateMode} className={s[makeClass(props.date, props.completed)]}>
            <td><input
                type="checkbox"
                checked={props.completed}
                onChange={() => {
                    props.setCompleted(props.id)
                }}
            /></td>
            {(!editMode) ?
                <td  className={s[makeClass(props.date, props.completed)]}>{title}</td>
                : <td><input onChange={(e) => {setTitle(e.target.value)}}
                             value={title}  className={s[makeClass(props.date, props.completed)]}/></td>}
            {(!editMode) ? <td>{props.type}</td> :
                <td><select>
                    <option>Пункт 1</option>
                    <option>Пункт 2</option>
                </select></td>}
            {(!editMode) ?  <td>{props.date}</td> :  <td><input  type="datetime-local"/></td>}
            <td><img src= {(hide) ? icDown : icUp} onClick={()=>{setHide(!hide)}} alt="show"/></td>
            <td className={s.del_col}>
                <img onClick={() => props.delData(props.id)} src="./ic-delete.svg" alt="del"/></td>
        </tr>
            <tr onDoubleClick={activateMode} style={ (hide) ?{display: 'none'} : {display: 'inline'}} onKeyPress={deactivateMode}>
                {(!editMode) ?  <td colspan="4">{props.description}</td> : <td colSpan="4"><textarea/></td>}
        </tr>
        </>)
}

export default ItemList;