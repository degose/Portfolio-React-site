import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// ie 환경에서 Object.values 메소드를 사용하기 위한 폴리필
const valuesPolyfill = function values (object) {
  return Object.keys(object).map(key => object[key]);
};

const values = Object.values || valuesPolyfill;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
