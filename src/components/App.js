import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "./error/notFound";
import Todo from './todo/todo.js'
import Header from "./header/header";
import {useDispatch, useSelector} from "react-redux";
import {workflowActions} from "../redux/workflowActions";


function App() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.todoPage.data);

    useEffect(() => {
        if (localStorage.getItem('todo')) {
            let todoList = JSON.parse(localStorage.getItem('todo'));
            dispatch(workflowActions.setData(todoList));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(data))
    }, [data])

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' render={() => <Todo data={data}/>}/>
                <Route render={() => <NotFound/>}/>
            </Switch>
        </div>
    );
}


export default App;
