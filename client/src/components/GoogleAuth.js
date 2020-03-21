import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../creators";

class GoogleAuth extends Component {
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
          this.authChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.authChange);
        });
    });
  }

  authChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onLoginClick = () => {
    this.auth.signIn();
  };
  onLogoutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (!!this.props.isSignedIn) {
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

const mapStateToProps = state => {
  console.log(state.auth);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
