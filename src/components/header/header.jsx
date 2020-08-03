import React from "react";
import s from "../todo/todo.module.css";
import {useDispatch} from "react-redux";
import {workflowActions} from "../../redux/workflowActions";

const Header = () => {
    const dispatch = useDispatch();
    const resetList = () => {
        let ans = window.confirm("Reset list?");
        if (ans) {
            localStorage.removeItem('todo');
            dispatch(workflowActions.resetData());
        }
    }

    return (
        <div className={s.header}>
            <p>Sklerontina</p>
            <button onClick={resetList}>Reset list</button>
        </div>
    )
}
export default Header;