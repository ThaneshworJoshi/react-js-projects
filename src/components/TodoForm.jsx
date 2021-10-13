import React from 'react';

const TodoForm = () => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor='new-todo'>What needs to be done?</label>
      <input type='text' id='new-todo' onChange={() => {}} value='' />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
