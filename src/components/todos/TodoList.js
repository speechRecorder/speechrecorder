import React from 'react';
import TodoSummary from './TodoSummary';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list section">
      {/* ensure that we have todos */}
      {todos && todos.map(todo => <TodoSummary todo={todo} key={todo.id} />)}
    </div>
  );
};

export default TodoList;
