import React, { Component } from 'react';

class HeaderInfo extends Component {
  render() {
    return (
      <header className="header-info">
        <div className="jumbotron header-bg">
          <div className="container">
            <div className="header-content-wrapper row">
              <div className="col">
                <h1 className="header-title">We are infinite!</h1>
                <p className="header-content-text lead">
                  <strong>저는 유능할 때 행복함을 느낍니다.</strong> 늘 새로운 것을 탐색하고 학습하는 저는 그래픽 디자이너로 일하다 웹서비스를 구축해 낸다는 것에 성취감을 느껴 프론트엔드 개발자가 되었습니다. 비록 개발자로서의 경험이 길지는 않지만, <br /><strong>우리의 한계는 없습니다.</strong>  
                </p>

                <form action="https://github.com/degose" target="_blank">
                  <button type="submit" className="btn-header btn btn-outline-light">
                    <span className="fa fa-github" aria-hidden="true"></span>
                    Github
                  </button>
                </form>

              </div>
              <div className="bg-wrapper">
                <img alt="배경 이미지" className="bg-img" src="https://images.unsplash.com/photo-1485458029194-00cff7de3ef7?auto=format&fit=crop&w=2850&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderInfo;