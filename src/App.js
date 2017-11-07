import React, { Component } from 'react';
import NavBar from './component/nav_bar';
import HeaderInfo from './component/header_info';
import MainProject1 from './component/main_project1';
import MainProject2 from './component/main_project2';
import MainCareer from './component/main_career';
import FooterContact from './component/footer_contact';
import Scroll from 'react-scroll';

let Element = Scroll.Element;

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Element name="hello" className="element header-info-bg">
          <HeaderInfo />
        </Element>
        <Element name="Bond" className="element main-project-bg">
          <MainProject1 />
        </Element>
        <Element name="Mood" className="element main-project-bg">
          <MainProject2 />
        </Element>
        <Element name="Career" className="element main-career-bg">
          <MainCareer />
        </Element>
        <Element name="Contact" className="element contact-bg">
          <FooterContact />
        </Element>
      </div>
    );
  }
}

export default App;