import React, { Component } from 'react';
import Notifications from './Notifications';
import TodoList from '../todos/TodoList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const speechSynthesis = window.speechSynthesis || window.webkitSpeechSynthesis;
// const voiceSelect = document.querySelector('#voice-select')
const textInput = document.querySelector('#text-input');
const textForm = document.querySelector('#text-form');

let voices = [];
const getVoices = () => {
  voices = speechSynthesis.getVoices();
  //loop through voices and create an option for each one.
  voices.forEach(voice => {
    //Create an option element
    const option = document.createElement('option');
    //Fill option with voice and language
    option.textContent = voice.name + `(${voice.lang})`;
    //set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    // voiceSelect.appendChild(option)
  });
};

getVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = getVoices;
}

//speak
const speak = () => {
  //check if app is speaking
  if (speechSynthesis.speaking) {
    console.error('Already speaking..');
    return;
  }
  if (textInput.value !== '') {
    //get speak text -- but we already have it in todoSummary -> {content}
    const speakText = new SpeechSynthesisUtterance(textInput.value);
    //speak end
    speakText.onend = event => {
      console.log('done speaking...');
    };
    //speak error
    speakText.onError = event => {
      console.error('something went wrong');
    };
  }
};

//EVENT LISTENERS
//text form submit
// textForm.addEventListener('submit', event => {
//   event.preventDefault();
//   speak();
//   textInput.blur();
// });

class Dashboard extends Component {
  state = {
    content: ''
  }

  render() {
    let { todos, auth } = this.props;
    const userId = auth.uid;
    const userTodos = todos
      ? todos.filter(todo => todo.authorId === userId)
      : null;

    if (!auth.uid) return <Redirect to="signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
        {/* added to test speak back */}
          {/* <form id="text-form">
            <div className="input-field">
              <label htmlFor="text-input">Text to Speak</label>
              <input
                type="text"
                name="text-input"
              />
            </div>
          </form> */}
          <div className="col s12 m6"></div>
          <TodoList todos={userTodos} />
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.firestore.ordered.todos,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'todos' }])
)(Dashboard);
