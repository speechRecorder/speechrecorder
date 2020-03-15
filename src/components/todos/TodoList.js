import React from 'react';
import TodoSummary from './TodoSummary';
import { Link } from 'react-router-dom';

const TodoList = ({ todos }) => {
  if (todos && todos.length === 0)
    return (
      <div class="card-panel">
        <p class="left-align">
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
            <Link to={`/todos/${todo.id}`} key={todo.id}>
              <TodoSummary todo={todo} />
            </Link>
          );
        })}
    </div>
  );
};

export default TodoList;
