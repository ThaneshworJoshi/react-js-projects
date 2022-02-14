import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todoItem) => {
          return (
            <li key={todoItem.id}>
              <span className={`${todoItem.done ? 'class1' : ''}`}>
                {todoItem.task}
              </span>
              {todoItem.done ? '(done)' : ''}
              <button onClick={() => this.props.doneHandler(todoItem.id)}>
                Done
              </button>
              <button
                onClick={() => {
                  this.props.deleteHandler(todoItem.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
