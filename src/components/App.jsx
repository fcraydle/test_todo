import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotFound from './error/notFound';
import Todo from './todo/todo';
import Header from './header/header';
import { setData, resetData } from '../redux/workflowActions';
import { getDataStore, setDataStore } from '../utils/requests';

function App({ data, dispatchSetData, dispatchResetData }) {
  useEffect(() => {
    const todoList = getDataStore();
    dispatchSetData(todoList);
  }, [dispatchSetData]);

  useEffect(() => {
    setDataStore(data);
  }, [data]);

  return (
    <div>
      <Header resetData={dispatchResetData} />
      <Switch>
        <Route exact path="/" render={() => <Todo />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}
App.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    complete: PropTypes.bool,
    type: PropTypes.string,
    date: PropTypes.string,
  })),
  dispatchSetData: PropTypes.func,
  dispatchResetData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  data: state.todoPage.data,
});
const mapDispatchToProps = {
  dispatchSetData: setData,
  dispatchResetData: resetData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
