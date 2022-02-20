import React, { useRef } from "react";

export default function GoogleAuth() {
  const GOOGLE_CLIENT_ID =
    "75253675905-hl0mth765qqtl74sca722vq6r8c1aohi.apps.googleusercontent.com";

  const [singnedIn, setSignedIn] = React.useState(null);
  let auth = useRef(0);

  React.useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({ clientId: GOOGLE_CLIENT_ID, scope: "email" })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(() => {
            setSignedIn(auth.current.isSignedIn.get());
          });
        });
    });
  }, []);

  const signIn = () => auth.current.signIn();
  const signOut = () => auth.current.signOut();

  function renderAuthButton() {
    if (singnedIn === null) {
      return null;
    } else if (singnedIn) {
      return (
        <button onClick={signOut} className="btn btn-secondary">
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={signIn} className="btn btn-primary">
          <i className="fa-brands fa-google"></i> Sign in with Google
        </button>
      );
    }
  }

  return <div>{renderAuthButton()}</div>;
}
