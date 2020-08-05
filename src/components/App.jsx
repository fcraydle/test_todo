import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotFound from './error/notFound';
import Todo from './todo/todo';
import Header from './header/header';
import { setData as dispatchSetData, resetData as dispatchResetData }
  from '../redux/workflowActions';
import { getDataStore, setDataStore } from '../utils/requests';

function App({ data, setData, resetData }) {
  useEffect(() => {
    const todoList = getDataStore();
    setData(todoList);
  }, [setData]);

  useEffect(() => {
    setDataStore(data);
  }, [data]);

  return (
    <div>
      <Header resetData={resetData} />
      <Switch>
        <Route exact path="/" render={() => <Todo />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}
App.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
  resetData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  data: state.todoPage.data,
});
const mapDispatchToProps = {
  setData: dispatchSetData,
  resetData: dispatchResetData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
