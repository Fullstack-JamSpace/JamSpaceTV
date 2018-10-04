import Peer from 'peerjs';
import React, { Component } from 'react';
import * as firebase from 'firebase';


export default class ViewerVid extends Component {

  componentDidMount() {
    let { displayName } = this.props.displayName
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('USER HERE!: ', user);
      }
    });


    // let viewerPeerId =
    //   'viewerJavierLilahJackie' + Math.floor(Math.random() * 1000);

    const peer = new Peer();
    console.log('peer created', peer);

    peer.on('open', id => {
      console.log('my id is ', id);
    });

    let conn = peer.connect(displayName);

    peer.on('call', function(call) {
      // Answer the call, providing our mediaStream
      call.answer();
      console.log('call answered');
      call.on('stream', function(stream) {
        myVideo.srcObject = stream;
        console.log('stream added to video object');
      });
    });

    const myVideo = document.getElementById('myVideo');
  }

  render() {
    return (
      <div>
        <p>hi viewer</p>
        <video id="myVideo" autoPlay muted />
      </div>
    );
  }
}
