import React, { Component } from 'react';
import Notifications from './Notifications';
import AudioList from '../todos/AudioList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"></div>
          <AudioList />
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
