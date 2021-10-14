import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, markTodo, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
