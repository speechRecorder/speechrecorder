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
        <button
          id="microphone-btn"
          className="waves-effect waves-light btn-small mt-4"
          onClick={this.toggleListen}
        >
          Click me to Record!
          <i className="material-icons right">mic_none</i>
        </button>
        <form className="cream" onSubmit={this.handleSubmit}>
          {/* <div className="input-field">
            <label htmlFor="title">Title</label>
            <textarea
              type="title"
              name="title"
              onChange={this.handleChange}
              style={interim}
            />
          </div> */}

          <div id="interim" style={interim} className="input-field mt-5">
            <input disabled value={this.state.interimTranscript || "Interim Transcription"} id="disabled" />
          </div>

          {/* <div className="input-field">
            <label htmlFor="interim">Interim</label>
            <textarea
              name="interim"
              type="interim"
              onChange={this.handleChange}
              id="interim"
              style={interim}
            />
          </div> */}

          <div className="input-field">
            {/* <label htmlFor="content">Content</label> */}
            <textarea
              name="content"
              type="content"
              onChange={this.handleChange}
              id="todo-content"
              style={interim}
            />
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light btn-large">Submit!
            <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
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
    color: 'black',
    border: 'black 1px solid',
    // padding: '1em',
    width: '300px',
  }
};

const { interim } = styles;
