import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: ['Learn React', 'Learn Python'],
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

  deleteHandler = (idx) => {
    let tempList = this.state.todoList.filter((value, index) => {
      if (index !== idx) {
        return true;
      }
    });

    this.setState({ todoList: tempList });
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
              {this.state.todoList.map((todoItem, idx) => {
                return (
                  <li>
                    {idx} {todoItem}{' '}
                    <button
                      onClick={() => {
                        this.deleteHandler(idx);
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
