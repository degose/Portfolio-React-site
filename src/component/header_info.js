import React, { Component } from 'react';
// import '../App.css';

class HeaderInfo extends Component {
  render() {
    return (
      <header className="header-info">
        <div className="jumbotron header-bg">
          <div className="container">
            <div className="content-wrapper row">
              <div className="col">
                <h1>Hello, world!</h1>
                <p className="header-content-text lead">한때 디자이너를 꿈꿨지만, 웹서비스를 구축해 낸다는 것에 성취감을 느껴 개발자가 되기로 결심하였습니다. 웹페이지를 디자인한 경험을 통해 사용자 입장에서 편리한 웹페이지, 통일되고 접근성에 좋은 디자인에 대하여 고민할 수 있었고, 웹, 앱 서비스의 GUI 디자인 가이드를 만들며 쌓은 경험을 통해 디자이너와 개발자 입장에서 어떻게 하면 작업이 쉬울지 고민할 수 있었습니다. </p>
                <form action="https://github.com/degose">
                  <button type="submit" className="btn btn-outline-secondary">
                    <span className="fa fa-github" aria-hidden="true"></span>
                    Github
                  </button>
                </form>
              </div>
              <div className="col img-wrapper">
                <img alt="profile-img" src="https://avatars1.githubusercontent.com/u/27682015?s=400&u=e4ee0d37f412f33eb20482e1f0542a6cde51c90b&v=4" className="profile-img rounded" />
              </div>
            </div>
          </div>
        </div>
      </header>

     
    )
  }
}

export default HeaderInfo;