import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: ['Learn React', 'Learn Python'],
      todoText: 'Cook Food',
    };
  }

  handleClick() {
    console.log('button clicked');
  }

  render() {
    return (
      <div>
        <h1>Todo List App In React</h1>
        <div>
          <input type='text' value={this.state.todoText} />

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
