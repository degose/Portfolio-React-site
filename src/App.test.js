import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FooterContact from './component/footer_contact';
import { shallow, mount, render } from 'enzyme';



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('유저 폼', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe('게시판', () => {
  it('이 성공적으로 렌더링 되어야 한다.', () => {
    const footer = document.createElement('footer');
    ReactDOM.render(<FooterContact />, footer);
  });
});


// describe('유저 폼', () => {
//   it('이 성공적으로 렌더링되어야 합니다', () => {
//     const wrapper = shallow(<LoginContainer />);
//     expect(wrapper).to.be(null);
//   });

//   it('의 내부에 텍스트가 있어야합니다', () => {
//     const wrapper = mount(<LoginContainer />);
//     expect(wrapper).to.be();
//   });
// });