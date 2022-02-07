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
    this.setState({ todoList: [this.state.todoText, ...this.state.todoList] });
    this.setState({ todoText: '' });
  };

  handleTextChange = (e) => {
    this.setState({ todoText: e.target.value });
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
                return <li>{todoItem}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
