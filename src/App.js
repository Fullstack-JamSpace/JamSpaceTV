import React, { Component } from 'react';
import './App.css';
// import StreamTest from './stream-test'
// import FriendStreamTest from './friend-stream-test'
import PeerJSStreamer from './peerJSStreamer';
import PeerJSViewer from './peerJSViewer';
import { Route, Switch } from 'react-router-dom';
import Login from './login';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/streamer' component={PeerJSStreamer}/>
        <Route exact path='/viewer' component={PeerJSViewer}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
      </div>
    );
  }
}

export default App;
