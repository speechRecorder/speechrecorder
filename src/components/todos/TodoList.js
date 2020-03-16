import React from 'react';
import TodoSummary from './TodoSummary';
// import { Link } from 'react-router-dom';

const TodoList = ({ todos, rate, pitch }) => {
  if (todos && todos.length === 0)
    return (
      <div className="card-panel">
        <p className="left-align">
          <i>No todos yet, record one in "New Todo"</i>
        </p>
      </div>
    );

  return (
    <div className="todo-list section">
      {todos &&
        todos.map(todo => {
          return (
            <div>
            <TodoSummary rate={rate} pitch={pitch} todo={todo} key={todo.id} />
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
