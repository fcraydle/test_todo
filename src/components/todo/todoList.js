import React, {useEffect, useState} from "react";
import ItemList from "./itemList";
import s from "./todo.module.css"

const TodoList = (props) => {
    const [sortUp, setSortUp] = useState(false);
    const [sortParam, setSortParam] = useState('');

    let checkedSort = (e) => {
        (sortParam === e.target.value) ? setSortUp(!sortUp) : setSortUp(true);
        setSortParam(e.target.value);
        props.setSort(e.target.value, sortUp);

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
            {props.data.map((elem, i) => {
                return <ItemList setData={props.setData} changeValue={props.changeValue} key={i} delData={props.delData}
                                 setCompleted={props.setCompleted} {...elem}/>
            })}
            </tbody>
        </table>)
}

export default TodoList;