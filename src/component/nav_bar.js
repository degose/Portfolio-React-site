import React, { Component } from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

class NavBar extends Component {

  // 기본으로 active클래스를 가지는 첫번째 링크의 active클래스 규칙 구성
  handleDelActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.remove('active');
  }

  handleSetActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.add('active');
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed-top">
          <div className="container">
            <Link activeClass="active" className="navbar-brand" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
              Gose Portfolio
            </Link>

            <div className="nav-items col-md-6 col-xs-12" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active" id="first-item">
                  <Link activeClass="active" className="nav-link" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    Hello!
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Bond" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Bond
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Mood" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Mood
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Career" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Career
                  </Link>
                </li>
                <li className="nav-item">
                  <Link activeClass="active" className="nav-link" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     
      </div>
    )
  }
}

export default NavBar;