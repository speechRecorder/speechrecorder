import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Speech from 'react-speech';

class TodoSummary extends React.Component {

  render() {
    const { todo, rate, pitch} = this.props;
    const { title, content, authorFirstName, authorLastName, createdAt } = todo;

    return (
      <div className="card z-depth-0 todo-summary ">
        <div className="card-content grey-text text-darken-3 text-center" id="content-card">
          <span className="card-title ">
            <div className="waves-effect waves-light btn">
              Playback{' '}
              <Speech
                text={content}
                voice="Google UK English Male"
                rate={rate}
                pitch={pitch}
              />
            </div>

          </span>
          <Link to={`/todos/${todo.id}`} key={todo.id}>
            <p>{content}</p>
          </Link>
          <p>Posted by {`${authorFirstName} ${authorLastName}`}</p>
          <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default TodoSummary;
