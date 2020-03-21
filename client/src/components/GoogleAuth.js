import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "413125479542-877r26hed16ehq4rl2goaahftrj1hg0v.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}
