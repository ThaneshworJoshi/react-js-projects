import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoApp = () => {
  const [items, setItems] = useState([]);
  const [todoText, setTodoText] = useState('');

  function handleChange(event) {
    let newTodoText = event.target.value;
    setTodoText(newTodoText);
  }

  return (
    <div>
      <h3>REACT TODO APP</h3>
      <TodoForm todoText={todoText} handleTodoTextChange={handleChange} />
    </div>
  );
};

export default TodoApp;
