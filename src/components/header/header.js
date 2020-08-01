import React from "react";
import s from "../todo/todo.module.css";

const Header = (props) => {
    const resetList = () => {
        let ans = window.confirm("Reset list?");
        if (ans) {
            localStorage.removeItem('todo');
            props.resetData();
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