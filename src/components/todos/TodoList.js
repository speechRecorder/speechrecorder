import React from 'react';
import TodoSummary from './TodoSummary';
import { Link } from 'react-router-dom';

const TodoList = ({ todos }) => {
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
      {/* ensure that we have todos */}
      {todos &&
        todos.map(todo => {
          return (
              <TodoSummary todo={todo} key={todo.id}/>
          );
        })}
    </div>
  );
};

export default TodoList;
