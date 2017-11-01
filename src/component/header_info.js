import React, { Component } from 'react';
// import '../App.css';

class HeaderInfo extends Component {
  render() {
    return (
      <div className="header-info">
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Hello, world!</h1>
                <p>ddddd</p>
                <button type="button" className="btn btn-outline-secondary">
                  <span className="fa fa-github" aria-hidden="true"></span>
                  Github
                </button>
              </div>
              <div className="col">
                <img alt="profile-img" src="https://avatars1.githubusercontent.com/u/27682015?s=400&u=e4ee0d37f412f33eb20482e1f0542a6cde51c90b&v=4" className="profile-img rounded float-right" />
              </div>
            </div>
          </div>
        </div>
      </div>

     
    )
  }
}

export default HeaderInfo;