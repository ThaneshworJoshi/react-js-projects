import React from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <b>Add Todo</b>
      </label>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Add new todo'
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default TodoForm;
