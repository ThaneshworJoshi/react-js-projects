import React from 'react';

const TodoForm = (props) => {
  // {todoText, handleTodoTextChange, saveTodo}

  return (
    <>
      <label htmlFor='new-todo'>What needs to be done?</label>
      <input
        type='text'
        id='new-todo'
        onChange={props.handleTodoTextChange}
        value={props.todoText}
      />
      <button onClick={props.saveTodo}>Add Todo</button>
    </>
  );
};

export default TodoForm;
