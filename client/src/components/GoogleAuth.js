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
          this.auth.isSignedIn.listen(this.authChange);
        });
    });
  }

  authChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onLoginClick = () => {
    this.auth.signIn();
  };
  onLogoutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (!!this.state.isSignedIn) {
      return (
        <button onClick={this.onLogoutClick} className="ui red google button">
          <i className="google icon"></i>Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onLoginClick} className="ui red google button">
          <i className="google icon"></i>Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
