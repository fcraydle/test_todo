import React, {useState} from "react";
import ItemList from "./itemList";
import s from "./todo.module.css";
import {useDispatch} from "react-redux";
import {workflowActions} from "../../redux/workflowActions";

const TodoList = (props) => {
    const [sortUp, setSortUp] = useState(false);
    const [sortParam, setSortParam] = useState('');

    const dispatch = useDispatch();

    let checkedSort = (e) => {
        (sortParam === e.target.value) ? setSortUp(!sortUp) : setSortUp(true);
        setSortParam(e.target.value);
        dispatch(workflowActions.setSort(e.target.value, sortUp));
    }

    return (
        <table className={s.table}>
            <thead>
            <tr>
                <th>status
                    <input onClick={(e) => checkedSort(e)}
                           className={(sortUp) ? s.radio_btn : s.radio_btn_up}
                           type="radio" value='completed' name="sort"/></th>
                <th>title</th>
                <th>type
                    <input onClick={(e) => checkedSort(e)}
                           className={(sortUp) ? s.radio_btn : s.radio_btn_up}
                           type="radio" value='type' name="sort"/></th>
                <th style={{width: '250px'}}>date
                    <input onClick={(e) => checkedSort(e)}
                           className={(sortUp) ? s.radio_btn : s.radio_btn_up}
                           type="radio" value='date' name="sort"/></th>
            </tr>
            </thead>
            <tbody>
            {(props.data.typeof !== 'undefined' || props.data.length !== 0)?
                props.data.map((elem, i) => {return <ItemList key={i} {...elem}/>}): null}
            </tbody>
        </table>)
}

export default TodoList;