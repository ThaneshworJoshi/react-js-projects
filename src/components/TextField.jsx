import React, { Component } from 'react';

class TextField extends Component {
  render() {
    return (
      <>
        <div>
          <input
            type='text'
            value={this.props.todoText}
            onChange={this.props.handleTextChange}
          />

          <button onClick={this.props.addTodoHandler}>Add Todo</button>
        </div>
        <span style={{ color: 'red', fontSize: '15px' }}>
          {this.props.errorMessage}
        </span>
      </>
    );
  }
}

export default TextField;
