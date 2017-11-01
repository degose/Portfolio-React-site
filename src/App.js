import React, { Component } from 'react';
import NavBar from './component/nav_bar';
import HeaderInfo from './component/header_info';
import MainProject from './component/main_project';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeaderInfo />
        <MainProject />

        
      </div>
    );
  }
}

export default App;