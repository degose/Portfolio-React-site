import React, { Component } from 'react';

class MainCareer extends Component {
  render() {
    return (
      <section className="main-career">
        <div className="jumbotron career-bg">
          <div className="container">
            <h1 className="career-title">Career</h1>
            {/* <p className="sub-text">하루의 감정을 기록 할 수 있는 다이어리</p> */}
            <div className="content-wrapper row">
              <div className="col-md-6 col-xs-12 career-list-wrapper">
                <a href="https://gosecode.wordpress.com/project-type/dk-service/" className="career-list dk-bg">
                  <h4 className="content-title">dk service</h4>
                  <span>(2014. 3 ~ 2016. 7)</span>
                  <p className="content-text">UI디자인팀</p>
                </a>
              </div>
              <div className="col-md-6 col-xs-12 career-list-wrapper">
                <a href="https://gosecode.wordpress.com/project-type/ize/" className="career-list ize-bg">
                  <h4 className="content-title">ize 웹 매거진</h4>
                  <span>(2016. 8 ~ 2017. 4)</span>
                  <p className="content-text">그래픽 디자인팀</p>
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