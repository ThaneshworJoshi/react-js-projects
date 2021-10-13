import React from 'react';

const TodoForm = (props) => {
  // {todoText, handleTodoTextChange, saveTodo}
  return (
    <form onSubmit={() => {}}>
      <label htmlFor='new-todo'>What needs to be done?</label>
      <input
        type='text'
        id='new-todo'
        onChange={(event) => props.handleTodoTextChange(event)}
        value={props.todoText}
      />
      <button onClick={props.saveTodo}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
