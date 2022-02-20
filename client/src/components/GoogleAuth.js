import React from "react";

export default function GoogleAuth() {
  const GOOGLE_CLIENT_ID =
    "75253675905-hl0mth765qqtl74sca722vq6r8c1aohi.apps.googleusercontent.com";

  React.useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({ clientId: GOOGLE_CLIENT_ID, scope: "email" });
    });
  }, []);

  return <div>GoogleAuth</div>;
}
