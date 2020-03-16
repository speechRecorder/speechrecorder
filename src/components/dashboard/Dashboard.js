import React, { Component } from 'react';
import Notifications from './Notifications';
import TodoList from '../todos/TodoList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import VoiceForm from './VoiceForm';

class Dashboard extends Component {
  state = {
    content: '',
    rate: 1,
    pitch: 1
  };

  onChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    let { todos, auth } = this.props;
    const userId = auth.uid;
    const userTodos = todos
      ? todos.filter(todo => todo.authorId === userId)
      : null;

    if (!auth.uid) return <Redirect to="signin" />;
    return (
      <div className="center-align">
        <VoiceForm onChange={this.onChange} rate={this.state.rate} pitch={this.state.pitch}/>

        <div className="dashboard container">
          <div className="row ">
            <div className="col s12 m6"></div>
            <TodoList rate={this.state.rate} pitch={this.state.pitch} todos={userTodos} />
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
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
