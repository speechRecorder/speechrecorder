import React, { Component } from 'react';
import Notifications from './Notifications';
import TodoList from '../todos/TodoList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"></div>
          <TodoList todos={todos} />
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.firestore.ordered.todos
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'todos' }])
)(Dashboard);
