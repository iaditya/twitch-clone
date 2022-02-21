import React, { useRef } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

function GoogleAuth({ signIn, signOut, isSignedIn }) {
  const GOOGLE_CLIENT_ID =
    "75253675905-hl0mth765qqtl74sca722vq6r8c1aohi.apps.googleusercontent.com";
  let authObj = useRef(0);

  const onAuthChange = React.useCallback(
    (isSignedIn) => {
      if (isSignedIn) {
        signIn(authObj.current.currentUser.get().getId());
      } else {
        signOut();
      }
    },
    [signIn, signOut]
  );

  React.useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({ clientId: GOOGLE_CLIENT_ID, scope: "email" })
        .then(() => {
          authObj.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(authObj.current.isSignedIn.get());
          authObj.current.isSignedIn.listen((isSignedIn) => {
            onAuthChange(isSignedIn);
          });
        });
    });
  }, [onAuthChange]);

  const signInClick = () => authObj.current.signIn();
  const signOutClick = () => authObj.current.signOut();

  function renderAuthButton() {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={signOutClick} className="btn btn-secondary">
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={signInClick} className="btn btn-primary">
          <i className="fa-brands fa-google"></i> Sign in with Google
        </button>
      );
    }
  }

  return <div>{renderAuthButton()}</div>;
}

function mapStateToProps(state) {
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
