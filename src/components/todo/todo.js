import React, {useState} from 'react';
import s from './todo.module.css';
import TodoList from "./todoList";

const getDate = () => {
    let d = new Date();
    let day = d.getDate();
    day = (day < 10) ? `0${day}` : day;
    let month = d.getMonth() + 1;
    month = (month < 10) ? `0${month}` : month;
    let year = d.getFullYear();
    let hours = d.getHours();
    hours = (hours < 10) ? `0${hours}` : hours;
    let minutes = d.getMinutes();
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    return (`${year}-${month}-${day}T${hours}:${minutes}`);
}

const Todo = (props) => {

    const [todoValue, setTodoValue] = useState({type: 'work', title: '', description: '', date: getDate()});

    const addTodo = (value) => {
        props.addData(value);
        setTodoValue({title: '', type: 'work', description: '', date: getDate()});
    }
    return (
        <div className={s.container}>
            <div className={s.todo_form}>
                <h1>ToDo App</h1>
                <input type="text" className={s.input_add} value={todoValue.title} placeholder=' Title task'
                       onChange={e => setTodoValue({...todoValue, title: e.target.value})}/>
                <textarea type="text" className={s.input_add} value={todoValue.description} placeholder=' Description'
                          onChange={e => setTodoValue({...todoValue, description: e.target.value})}/>
                <input type="datetime-local"
                       className={s.form_date} value={todoValue.date} min={todoValue.date}
                       onChange={e => setTodoValue({...todoValue, date: e.target.value})}/>
                <div className={s.todo_type}>
                    <span>Work </span>
                    <input type="radio" name="type" value="work"
                           checked={(todoValue.type === 'work' ? true : false)}
                           onChange={e => setTodoValue({...todoValue, type: e.target.value})}/>
                    <span>Personal </span>
                    <input checked={(todoValue.type !== 'work' ? true : false)} type="radio" name="type"
                           value="personal"
                           onChange={e => setTodoValue({...todoValue, type: e.target.value})}/>
                </div>
                <button disabled={(todoValue.title !== '' && todoValue.description !== '') ? false : true}
                        onClick={() => addTodo(todoValue)} className={s.btn_add}>Add
                </button>
            </div>
            <TodoList setSort={props.setSort}
                      delData={props.delData}
                      setCompleted={props.setCompleted}
                      data={props.data}
                      setData={props.setData}
                      changeValue={props.changeValue}/>
        </div>
    )
};

export default Todo;