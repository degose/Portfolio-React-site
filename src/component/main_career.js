import React, { Component } from 'react';

class MainCareer extends Component {
  render() {
    return (
      <section className="main-career">
        <div className="jumbotron career-bg">
          <div className="container">
            <h1 className="">Career</h1>
            {/* <p className="sub-text">하루의 감정을 기록 할 수 있는 다이어리</p> */}
            <div className="content-wrapper row">
              <div className="col career-list-wrapper">
                <a href="/" className="career-list">
                  <h4 className="content-title">dk service</h4>
                  <p className="content-text">UI디자인팀</p>
                </a>
              </div>
              <div className="col career-list-wrapper">
                <a href="/" className="career-list">
                  <h4 className="content-title">ize 웹 매거진</h4>
                  <p className="content-text">그래픽 디자인</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    )
  }
}

export default MainCareer;