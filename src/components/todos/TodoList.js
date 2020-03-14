import React from 'react';
import TodoSummary from './TodoSummary';
import { Link } from 'react-router-dom';

const TodoList = ({ todos }) => {
  console.log("todoList", todos)
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
