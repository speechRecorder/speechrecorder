import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createTodo } from '../../store/actions/todoActions'

class CreateTodo extends Component {
  state = {
    title: '',
    content: ''
    //potententially be sound/audio file.
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createTodo(this.state)
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Record Anything</h5>
          <div className="input-field">
            <label htmlFor="title"></label>
            <input type="title" name="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Audio Content</label>
            <textarea
              name="content"
              type="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink listen-1 z-depth-0">Click me to record!</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (todo) => dispatch(createTodo(todo))
  }
}
export default connect(null, mapDispatchToProps)(CreateTodo)