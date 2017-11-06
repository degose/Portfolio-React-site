import React, { Component } from 'react';

class MainProject2 extends Component {
  render() {
    return (
      <section className="main-project">
        <div className="jumbotron project-bg">
          <div className="container">
            <div className="title-wrapper">
              <h1 className="project-title">
                {/* <img alt="Mood로고" scr="/assets/l-mood.svg" /> */}
                Mood
                </h1>
              <p className="sub-text">하루의 감정을 기록 할 수 있는 다이어리</p>
            </div>
            <div className="content-wrapper row">
              <div className="col-md-6 video-wrapper">
                <div className="embed-responsive embed-responsive-16by9 media">
                  <iframe title="project1" className="embed-responsive-item project-video" src="https://www.youtube.com/embed/k8K98UBskyA" frameBorder="0" gesture="media" allowFullScreen />
                </div>
              </div>
              <div className="col-md-6">
                <ul className="info">
                  <li className="info-list">
                    <h4 className="content-title">팀 구성원</h4>
                    <ul className="content-text">
                      <li>Frontend - 고세민, 김태훈</li>
                    </ul>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">주요 기능</h4>
                    <p className="content-text">회원 가입 및 이메일 인증, 로그인, 회원 정보 설정 및 수정 (프로필 사진 및 유저 네임), 달력 => 날짜를 선택해 해당 날짜에 작성, 일기 쓰기 및 수정, 감정 이모티콘으로 감정 기록 => 선택한 감정 이모티콘이 달력에 반영, 감정 선택 횟수 통계 => 도넛 차트로 감정 선택 횟수 통계를 시각화, 한달에 일기를 몇 번 기록했는지 통계 제공</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">활용 도구/기술</h4>
                    <p className="content-text">Vue.js, Vuex, Vue-router, axios, Scss, HTML, webpack, Firebase</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">서비스 환경</h4>
                    <p className="content-text">IE 9+ 이상, 반응형 및 터치 이벤트 지원으로 모바일 환경 대응, 웹 접근성과 웹 표준 준수</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">업무 분담 및 협업 방안</h4>
                    <p className="content-text">기능별 분담, git 을 활용한 버전 관리, 페어 프로그래밍, 작업 분담은 깃헙의 프로젝트 메뉴를 활용해서 관리, 작업 일정은 스크럼보드를 통해 관리</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-wrapper">
              <div className="btn-group" role="group" aria-label="button group">
                <form action="https://github.com/degose/mood">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-github" aria-hidden="true"></span>
                    Github
                  </button>
                </form>
                <form action="https://mood-vuex.firebaseapp.com/">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-globe" aria-hidden="true"></span>
                    Web Site
                  </button>
                </form>
                <form action="https://docs.google.com/spreadsheets/d/1i7tOWOv7eNiqQlEGzf7wO5ybKPk8lishXqrKqkRDrzU/edit?usp=sharing">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                    Daily Scrum
                  </button>
                </form>
                <form action="https://youtu.be/k8K98UBskyA">
                  <button type="submit" className="btn btn-info-link btn-outline-dark">
                    <span className="fa fa-youtube-play" aria-hidden="true"></span>
                    Youtube
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

     
    )
  }
}

export default MainProject2;