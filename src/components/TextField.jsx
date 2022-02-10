import React, { Component } from 'react';

class TextField extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.todoText}
          onChange={this.props.handleTextChange}
        />

        <button onClick={this.props.handleClick}>Add Todo</button>
      </div>
    );
  }
}

export default TextField;
