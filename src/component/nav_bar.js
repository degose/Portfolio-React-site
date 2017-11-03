import React, { Component } from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

class NavBar extends Component {
  handleDelActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.remove('active');
  }

  handleSetActive(to) {
    let first_item = document.getElementById('first-item');
    first_item.classList.add('active');
  }

  handleNavActive() {
    let target = document.getElementById('navbar-active');
    target.classList.remove('navbar-m');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link activeClass="active" className="navbar-brand" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
              Gose Portfolio
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onChange={this.handleNavActive}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container navbar-active-wrapper">
              <div className=" navbar-m-active" id="navbar-active">
                <ul className="">
                  <li className="" id="first-item">
                    <Link activeClass="active" className="navbar-active-item" to="hello" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                      Hello!
                    </Link>
                  </li>
                  <li className="">
                    <Link activeClass="active" className="navbar-active-item" to="Bond" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                      Bond
                    </Link>
                  </li>
                  <li className="">
                    <Link activeClass="active" className="navbar-active-item" to="Mood" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                      Mood
                    </Link>
                  </li>
                  <li className="">
                    <Link activeClass="active" className="navbar-active-item" to="Career" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                      Career
                    </Link>
                  </li>
                  <li className="">
                    <Link activeClass="active" className="navbar-active-item" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleDelActive}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
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