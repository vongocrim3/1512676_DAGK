import React, { Component } from "react";
import Header from './Header';
import Message from './../message/Message';
import Users from '../user/Users';
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css';
import firebase from "firebase"

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div>
        <h1>React Redux Firebase Chat App</h1>
        <Header />
        <Grid>
          <Cell size='8/12'>
            <Message />
          </Cell>
          <Cell>
            <Users />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
