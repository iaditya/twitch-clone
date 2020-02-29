import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  componentDidMount() {
  }
  render() {
    const { user } = this.props;
    console.log(user);
    return <div className="header">{user ? user.name : ""}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
