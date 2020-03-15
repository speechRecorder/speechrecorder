import React from 'react';
import moment from 'moment'

const TodoSummary = ({ todo }) => {
  const { title, content, authorFirstName, authorLastName, createdAt } = todo;
  return (
    <div className="card z-depth-0 todo-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title"><b>{title}</b></span>
        <p>{content}</p>
        <p>Posted by {`${authorFirstName} ${authorLastName}`}</p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
}

export default TodoSummary