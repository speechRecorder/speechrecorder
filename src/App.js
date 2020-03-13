import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import AudioDetails from './components/todos/AudioDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateAudio from './components/todos/CreateAudio'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createaudio" component={CreateAudio} />
          <Route path="/todos/:id" component={AudioDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
