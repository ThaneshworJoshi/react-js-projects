import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: [
        { id: 1, task: 'Learn React', done: false },
        { id: 2, task: 'Learn Python', done: false },
      ],
      todoText: '',
    };
  }

  handleClick = () => {
    if (this.state.todoText === '') {
      return;
    }
    this.setState({ todoList: [...this.state.todoList, this.state.todoText] });
    this.setState({ todoText: '' });
  };

  handleTextChange = (e) => {
    this.setState({ todoText: e.target.value });
  };

  deleteHandler = (id) => {
    let tempList = this.state.todoList.filter((todo) => {
      if (todo.id !== id) {
        return true;
      }
      // if (todo.id === id) {
      //   return false;
      // } else {
      //   return true;
      // }
    });

    this.setState({ todoList: tempList });
  };

  doneHandler = (idx) => {
    const tempState = this.state.todoList.map((todo) => {
      if (todo.id === idx) {
        return { ...todo, done: true };
      } else {
        return todo;
      }
    });

    this.setState({ todoList: tempState });
  };

  render() {
    return (
      <div>
        <h1>Todo List App In React</h1>
        <div>
          <input
            type='text'
            value={this.state.todoText}
            onChange={this.handleTextChange}
          />

          <button onClick={this.handleClick}>Add Todo</button>

          <div>
            <ul>
              {this.state.todoList.map((todoItem) => {
                return (
                  <li key={todoItem.id}>
                    <span>{todoItem.task}</span>
                    {todoItem.done === true ? '(done)' : ''}
                    <button onClick={() => this.doneHandler(todoItem.id)}>
                      Done
                    </button>
                    <button
                      onClick={() => {
                        this.deleteHandler(todoItem.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
