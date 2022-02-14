import React, { Component } from 'react';

import Header from './components/Header';
import TextField from './components/TextField';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: [
        { id: 1, task: 'Learn React', done: false },
        { id: 2, task: 'Learn Python', done: false },
      ],
      todoText: '',
      errorMessage: '',
    };
  }

  addTodoHandler = () => {
    if (this.state.todoText === '') {
      return;
    }

    if (parseInt(this.state.todoText)) {
      this.setState({ ...this.state, errorMessage: 'text cannot be number' });
      return;
    }

    const id = this.state.todoList.length + 1;

    this.setState({
      todoList: [
        { id: id, task: this.state.todoText, done: false },
        ...this.state.todoList,
      ],
    });
    this.setState({ todoText: '', errorMessage: '' });
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
        <Header />
        <div>
          <TextField
            todoText={this.state.todoText}
            handleTextChange={this.handleTextChange}
            addTodoHandler={this.addTodoHandler}
            errorMessage={this.state.errorMessage}
          />
          <div>
            <TodoList
              todos={this.state.todoList}
              doneHandler={this.doneHandler}
              deleteHandler={this.deleteHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
