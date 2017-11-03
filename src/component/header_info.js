import React, { Component } from 'react';

class HeaderInfo extends Component {
  render() {
    return (
      <header className="header-info">
        <div className="jumbotron header-bg">
          <div className="container">
            <div className="header-content-wrapper row">
              <div className="col">
                <h1 className="header-title">Hello, world!</h1>
                <p className="header-content-text lead">한때 디자이너를 꿈꿨지만, 웹서비스를 구축해 낸다는 것에 성취감을 느껴 개발자가 되기로 결심하였습니다. </p>
                <form action="https://github.com/degose">
                  <button type="submit" className="btn-header btn btn-outline-light">
                    <span className="fa fa-github" aria-hidden="true"></span>
                    Github
                  </button>
                </form>
              </div>
              {/* <div className="col img-wrapper">
                <img alt="profile-img" src="https://avatars1.githubusercontent.com/u/27682015?s=400&u=e4ee0d37f412f33eb20482e1f0542a6cde51c90b&v=4" className="profile-img rounded" />
              </div> */}
            </div>
          </div>
        </div>
      </header>

     
    )
  }
}

export default HeaderInfo;