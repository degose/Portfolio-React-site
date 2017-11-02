import React, { Component } from 'react';

class MainProject1 extends Component {
  render() {
    return (
      <section className="main-project">
        <div className="jumbotron project-bg">
          <div className="container">
            <h1 className="">Bond</h1>
            <p className="sub-text">그룹 생성이 가능한 SNS 서비스</p>
            <div className="content-wrapper row">
              <div className="col video-wrapper">
                <div className="media">
                  <iframe title="project1" width="560" height="315" className="project-video" src="https://www.youtube.com/embed/gty0xzSBzRk" frameBorder="0" gesture="media" allowFullScreen />
                </div>
              </div>
              <div className="col">
                <ul className="info">
                  <li className="info-list">
                    <h4 className="content-title">팀 구성원</h4>
                    <ul className="content-text">
                      <li>Frontend - 고세민, 김태훈, 한성욱</li>
                      <li>Backend - 김기홍, 김영민, 이다함</li>
                    </ul>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">주요 기능</h4>
                    <p className="content-text">회원가입, 로그인, 내 정보 수정, 그룹 개설/삭제, 그룹 가입/탈퇴, 그룹 검색, 그룹 글 등록 및 삭제(글, 사진), 그룹 새 글 모아보기, 내 글 모아보기, 팔로우 기능, 팔로잉/팔로워 리스트  </p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">서비스 환경</h4>
                    <p className="content-text">IE 10+ 이상, 반응형</p>
                  </li>
                  <li className="info-list">
                    <h4 className="content-title">업무 분담 및 협업 방안</h4>
                    <p className="content-text">기능별 분담, git 을 활용한 버전 관리, 페어 프로그래밍, 작업 분담은 깃헙의 프로젝트 메뉴를 활용해서 관리, 작업 일정은 스크럼보드를 통해 관리</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-group" role="group" aria-label="button group">
              <form action="https://github.com/degose/Bond/tree/dev">
                <button type="submit" className="btn btn-info-link btn-outline-dark">
                  <span className="fa fa-github" aria-hidden="true"></span>
                  Github
                </button>
              </form>
              <form action="http://bond.thekym.com/">
                <button type="submit" className="btn btn-info-link btn-outline-dark">
                  <span className="fa fa-globe" aria-hidden="true"></span>
                  Web Site
                </button>
              </form>
              <form action="https://docs.google.com/spreadsheets/d/19uk0yIWIGAGDWxCyIE3sBjMY3eeNxImAGhN5P_W6S3M/edit?usp=sharing">
                <button type="submit" className="btn btn-info-link btn-outline-dark">
                  <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                  Daily Scrum
                </button>
              </form>
              <form action="https://youtu.be/gty0xzSBzRk">
                <button type="submit" className="btn btn-info-link btn-outline-dark">
                  <span className="fa fa-youtube-play" aria-hidden="true"></span>
                  Youtube
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

     
    )
  }
}

export default MainProject1;