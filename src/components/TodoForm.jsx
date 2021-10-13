import React from 'react';

const TodoForm = (props) => {
  // {todoText, handleTodoTextChange}
  return (
    <form onSubmit={() => {}}>
      <label htmlFor='new-todo'>What needs to be done?</label>
      <input
        type='text'
        id='new-todo'
        onChange={(event) => props.handleTodoTextChange(event)}
        value={props.todoText}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
