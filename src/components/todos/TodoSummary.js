import React from 'react';

export default function TodoSummary({ todo }) {
  const { title, content, authorFirstName, authorLastName } = todo;
  return (
    <div className="card z-depth-0 todo-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{content}</p>
        <p>Posted by {`${authorFirstName} ${authorLastName}`}</p>
        <p className="grey-text">date: March 13th</p>
      </div>
    </div>
  );
}
