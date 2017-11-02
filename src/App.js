import React, { Component } from 'react';
import NavBar from './component/nav_bar';
import HeaderInfo from './component/header_info';
import MainProject1 from './component/main_project1';
import MainProject2 from './component/main_project2';
import MainCareer from './component/main_career';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeaderInfo />
        <MainProject1 />
        <MainProject2 />
        <MainCareer />

        
      </div>
    );
  }
}

export default App;