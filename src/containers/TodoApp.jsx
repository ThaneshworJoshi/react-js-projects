import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isDone: false }];
    setTodos(newTodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h3>REACT TODO APP</h3>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} markTodo={markTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;
