import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const TodoDetails = props => {
  const { todo, auth } = props;
  if (todo) {
    if (!auth.uid) return <Redirect to="signin" />;

    return (
      <div className="container section audio-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{todo.title}</span>
            <p>{todo.content}</p>
          </div>
          <div className="card-action listen-4 grey-text">
            <div>
              Posted by {todo.authorFirstName} {todo.authorlastName}
            </div>
            <div>{moment(todo.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Todo..</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const todos = state.firestore.data.todos;
  const todo = todos ? todos[id] : null;
  return {
    todo: todo,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'todos' }])
)(TodoDetails);
