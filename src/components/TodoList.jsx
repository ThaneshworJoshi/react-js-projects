import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
