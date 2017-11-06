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
              <div className="bg-wrapper">
                <img alt="배경 이미지" className="bg-img" src="https://images.unsplash.com/photo-1485458029194-00cff7de3ef7?auto=format&fit=crop&w=2850&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-wrapper">
          <video className="video" autoPlay loop muted>
            <source src="https://gcs-vimeo.akamaized.net/exp=1509967581~acl=%2A%2F860696547.mp4%2A~hmac=cc9838158bccb5b153b8f47c672def3c35c8f44c174fbadfff2eea6c1caf1202/vimeo-prod-skyfire-std-us/01/3071/9/240358919/860696547.mp4" type="video/mp4"></source>
          </video>
          <img className="bg-img" alt="모바일화면 배경이미지" scr="https://images.unsplash.com/photo-1485458029194-00cff7de3ef7?auto=format&fit=crop&w=2850&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        </div> */}
      </header>

     
    )
  }
}

export default HeaderInfo;