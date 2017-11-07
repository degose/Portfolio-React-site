import React, { Component } from 'react';

class MainCareer extends Component {
  render() {
    return (
      <section className="main-career">
        <div className="jumbotron career-bg">
          <div className="container">
            <h1 className="career-title">Career</h1>
            <div className="row">
              <div className="col-md-4 card-container">
                <div className="card" style={{width: 20 +'rem'}}>
                  <img className="card-img-top" src="https://gosecode.files.wordpress.com/2017/07/dks-techin-1.png" alt="Card cap" />
                  <div className="card-body">
                    <h4 className="card-title">dk service</h4>
                    <span className="card-text">(2014. 3 ~ 2016. 7)</span>
                    <p className="card-text">UI디자인팀</p>
                    <a href="https://gosecode.wordpress.com/project-type/dk-service/" className="btn btn-career btn-outline-dark">자세히 보기</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-container">
                <div className="card" style={{width: 20 +'rem'}}>
                  <img className="card-img-top" src="https://gosecode.files.wordpress.com/2017/07/ize-izeshop-1.png" alt="Card cap" />
                  <div className="card-body">
                    <h4 className="card-title">ize 웹 매거진</h4>
                    <span className="card-text">(2016. 8 ~ 2017. 4)</span>
                    <p className="card-text">그래픽 디자인팀</p>
                    <a href="https://gosecode.wordpress.com/project-type/ize/" className="btn btn-career btn-outline-dark">자세히 보기</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-container">
                <div className="card" style={{width: 20 +'rem'}}>
                  <div className="card-body card-more">
                    <span className="fa fa-plus-square" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>

     
    )
  }
}

export default MainCareer;