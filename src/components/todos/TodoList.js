import React from 'react';
import TodoSummary from './TodoSummary';
import { Link } from 'react-router-dom';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list section">
      {/* ensure that we have todos */}
      {todos &&
        todos.map(todo => {
          return (
            <Link to={`/todos/${todos.id}`}>
              <TodoSummary todo={todo} key={todo.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default TodoList;
