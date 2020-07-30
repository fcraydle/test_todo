import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "./error/notFound";
import Todo from './todo/todo.js'
import Header from "./header/header";
import {setData, addData, setCompleted, setSort, delData, renameTitle, resetData} from "../redux/todo-reducer";
import {connect} from "react-redux";


function App(props) {

    useEffect(() => {
        if (localStorage.getItem('todo'))
            props.setData(JSON.parse(localStorage.getItem('todo')))
    }, [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(props.data))
    }, [props.data])

    return (
        <div>
            <Header resetData = {props.resetData}/>
            <Switch>
                <Route exact path='/' render={() => <Todo
                    setSort={props.setSort}
                    delData={props.delData}
                    setCompleted={props.setCompleted}
                    data={props.data}
                    renameTitle={props.renameTitle}
                    addData ={ props.addData}
                />}/>
                <Route render={() => <NotFound/>}/>
            </Switch>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        data: state.todoPage.data
    }
}

export default connect(mapStateToProps, {setData, addData, setCompleted, setSort, delData, renameTitle, resetData})(App);
