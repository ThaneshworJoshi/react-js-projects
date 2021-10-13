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

  function handleSubmit(event) {
    event.preventDefault();

    if (todoText.length === 0) {
      return;
    }

    const newTodo = { text: todoText, id: Date.now() };

    let updatedTodoItems = [newTodo, ...items];

    setItems(updatedTodoItems);
    setTodoText('');
  }

  return (
    <div>
      <h3>REACT TODO APP</h3>
      <TodoForm
        todoText={todoText}
        handleTodoTextChange={handleChange}
        saveTodo={handleSubmit}
      />
      <TodoList todos={items} />
    </div>
  );
};

export default TodoApp;
