import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

class TodoSummary extends React.Component {
  render() {
    const { todo } = this.props;
    const { title, content, authorFirstName, authorLastName, createdAt } = todo;

    return (
      <div className="card z-depth-0 todo-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">
            <button className="waves-effect waves-light btn">Playback</button>
            {/* <b>{title}</b> */}
          </span>
          <Link to={`/todos/${todo.id}`} key={todo.id}>
            <p>{content}</p>
          </Link>
            <p>Posted by {`${authorFirstName} ${authorLastName}`}</p>
          <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    );
  }
}

export default TodoSummary;
