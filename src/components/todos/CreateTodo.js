import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../../store/actions/todoActions';
import { Redirect } from 'react-router-dom';

// LISTENING FUNCTIONALITY\
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

class CreateTodo extends Component {
  state = {
    title: '',
    content: '',
    interimTranscript: '',
    listening: false,
    finalTranscript: ''
  };

  toggleListen = () => {
    this.setState(
      {
        listening: !this.state.listening
      },
      this.handleListen
    );
  };

  handleListen = () => {
    if (this.state.listening) recognition.start();

    let finalTranscript = '';
    recognition.onresult = event => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      // document.getElementById('interim').innerHTML = interimTranscript;
      document.getElementById('todo-content').innerHTML = finalTranscript;
      this.setState({
        content: finalTranscript,
        interimTranscript: interimTranscript
      });
    };
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createTodo(this.state);
    this.props.history.push('/');
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="signin" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Record </h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="title" name="title" onChange={this.handleChange} style={interim} />
          </div>
          <div id="interim" style={interim} className="input-field">
            {this.state.interimTranscript}
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <input
              name="content"
              type="content"
              onChange={this.handleChange}
              id="todo-content"
              style={interim}
            />
          </div>
          <div className="input-field">
            <button className="btn pink listen-1 z-depth-0">
              Submit!
            </button>
          </div>
        </form>
        <button id="microphone-btn" className="waves-effect waves-light btn" onClick={this.toggleListen}>
          Record!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTodo: todo => dispatch(createTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);

const styles = {
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  }
};

const {interim } = styles;
