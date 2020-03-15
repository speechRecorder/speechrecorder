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
    listening: false,
    interimTranscription: '',
    finalTranscription: ''
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
      // document.getElementById('final').innerHTML = finalTranscript;
      this.setState({
        interimTranscription: interimTranscript,
        finalTranscription: finalTranscript
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
          <h5 className="grey-text text-darken-3">Record Anything</h5>
          <div className="input-field">
            <label htmlFor="title"></label>
            <input type="title" name="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">{this.state.finalTranscription}</label>
            <textarea
              name="content"
              type="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink listen-1 z-depth-0">
              Click me to record!
            </button>
          </div>
        </form>

        {/* LISTEN BUTTON */}
        <button id="microphone-btn" style={button} onClick={this.toggleListen}>
          Talk
        </button>
        <div id="interim" style={interim}>{this.state.interimTranscription}</div>
        <div id="final" style={final}>{this.state.finalTranscription}</div>
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
  button: {
    width: '60px',
    height: '60px',
    background: 'lightblue',
    borderRadius: '50%',
    margin: '6em 0 2em 0'
  },
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  },
  final: {
    color: 'black',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  }
};

const { button, interim, final } = styles;
