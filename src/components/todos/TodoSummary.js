import React from 'react';

export default function AudioSummary({todo}) {
  return (
      <div className="card z-depth-0 todo-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{todo.title}</span>
          <p>Posted by TL squad</p>
          <p className="grey-text">date: March 13th</p>
        </div>
      </div>
  );
}
