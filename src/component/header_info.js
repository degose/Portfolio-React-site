import React, { Component } from 'react';
import '../App.css';

class HeaderInfo extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>...</p>
        <button type="button" className="btn btn-danger">Action</button>
      </div>
    )
  }
}

export default HeaderInfo;