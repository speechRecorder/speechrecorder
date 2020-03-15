import React, { Component } from 'react';
import Notifications from './Notifications';
import TodoList from '../todos/TodoList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    let { todos, auth } = this.props;
    const userId = auth.uid;
    const userTodos = todos
      ? todos.filter(todo => todo.authorId === userId)
      : null;

    if (!auth.uid) return <Redirect to="signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"></div>
          <TodoList todos={userTodos} />
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
    todos: state.firestore.ordered.todos,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'todos' }])
)(Dashboard);
