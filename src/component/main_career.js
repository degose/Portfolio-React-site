import React, { Component } from 'react';

class MainCareer extends Component {
  render() {
    return (
      <section className="main-career">
        <div className="jumbotron career-bg">
          <div className="container">
            <h1 className="career-title">Career</h1>
            {/* <p className="sub-text">하루의 감정을 기록 할 수 있는 다이어리</p> */}
            <div className="row">
              <div className="col-md-6 card-container">
                <div className="card" style={{width: 20 +'rem'}}>
                  <img className="card-img-top" src="https://gosecode.files.wordpress.com/2017/07/dks-techin-1.png" alt="Card cap" />
                  <div className="card-body">
                    <h4 className="card-title">dk service</h4>
                    <span>(2014. 3 ~ 2016. 7)</span>
                    <p className="card-text">UI디자인팀</p>
                    <a href="https://gosecode.wordpress.com/project-type/dk-service/" className="btn btn-career btn-outline-dark">자세히 보기</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 card-container">
                <div className="card" style={{width: 20 +'rem'}}>
                  <img className="card-img-top" src="https://gosecode.files.wordpress.com/2017/07/ize-izeshop-1.png" alt="Card cap" />
                  <div className="card-body">
                    <h4 className="card-title">ize 웹 매거진</h4>
                    <span>(2016. 8 ~ 2017. 4)</span>
                    <p className="card-text">그래픽 디자인팀</p>
                    <a href="https://gosecode.wordpress.com/project-type/ize/" className="btn btn-career btn-outline-dark">자세히 보기</a>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 card-container">
                <div class="card" style={{width: 20 +'rem'}}>
                  <img class="card-img-top" src="https://gosecode.files.wordpress.com/2017/07/9e1848be185aae18489e185aee186bae1848ce185a1e18483e185b3e186afe1848ee185ace1848ce185a9e186bc_e1848be185b0e186b8e1848be185ade186bca3.jpg" alt="Card cap" />
                  <div class="card-body">
                    <h4 class="card-title">그 외 활동</h4>
                    <p class="card-text"><span>(2010. 6 ~ 2015. 12)</span>그래픽, 패션 디자인</p>
                    <a href="https://gosecode.wordpress.com/project-type/%EA%B7%B8-%EC%99%B8/" class="btn btn-primary">자세히 보기</a>
                  </div>
                </div>
              </div> */}


            </div>



            {/* <div className="content-wrapper row">
              <div className="col-md-6 col-xs-12 career-list-wrapper">
                <a href="https://gosecode.wordpress.com/project-type/dk-service/" className="career-list dk-bg">
                  <h4 className="content-title">dk service</h4>
                  <span>(2014. 3 ~ 2016. 7)</span>
                  <p className="content-text">UI디자인팀</p>
                </a>
              </div> */}
              {/* <div className="col-md-6 col-xs-12 career-list-wrapper">
                <a href="https://gosecode.wordpress.com/project-type/ize/" className="career-list ize-bg">
                  <h4 className="content-title">ize 웹 매거진</h4>
                  <span>(2016. 8 ~ 2017. 4)</span>
                  <p className="content-text">그래픽 디자인팀</p>
                </a>
              </div> */}
            </div>
          </div>
        {/* </div> */}
      </section>

     
    )
  }
}

export default MainCareer;