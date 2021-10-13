import React, { useState } from 'react';

const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [todoText, setTodoText] = useState('');

  return (
    <div>
      <h3>REACT TODO APP</h3>
    </div>
  );
};

export default TodoApp;
