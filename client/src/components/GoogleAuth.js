import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "413125479542-877r26hed16ehq4rl2goaahftrj1hg0v.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  loginWithGoogle = () => {
    window.gapi.auth2.getAuthInstance().signIn();
    this.setState({
      isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get()
    });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>do not know</div>;
    } else if (!!this.state.isSignedIn) {
      return <div>Logged IN</div>;
    } else {
      return <div onClick={this.loginWithGoogle}>Login here</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
