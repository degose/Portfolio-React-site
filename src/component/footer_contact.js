import React, { Component } from 'react';
import axios from 'axios';

class FooterContact extends Component {
  constructor(props) {
    super(props);

    this.state = {name: '', comment: ''};
    this.state = {
      posts: [],
      keys: []
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // 라이프사이클 메소드
    // 해당 함수는 컴포넌트가 처음 DOM에 렌더링 되자마자 자동적으로 호출되는 것.
    // 리렌더링될때 다시 호출되지 않는다. 즉 다시 호출되지 않는다.

    this.fetchPosts();
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleCommentChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let today = new Date();
    axios.post('https://portfolio-react-site.firebaseio.com/post.json', 
    {
      name: this.state.name, 
      comment: this.state.comment,
      date: today
    })
    .then(response => {
      // console.log('response', response);
      this.fetchPosts();
      document.getElementById('input_name').value = '';
      document.getElementById('input_comment').value = '';
      // this.setState({name: '', comment: ''});
    })
    .catch(error => {
      console.log(error);
    });
  }

  fetchPosts() {
    axios.get('https://portfolio-react-site.firebaseio.com/post.json')
    .then(response => {
      // console.log('response', response.data);
      let key = Object.keys(response.data);
      let item = Object.values(response.data);
      // console.log('item', key);
      this.setState({posts: item})
      this.setState({keys: key})
    })
    .catch(error => {
      console.log(error);
    });
  }

  renderPosts() {
      let post_item = this.state.posts;
      let num = 0
      // console.log('post_item', post_item);
    return post_item.map((post) => {
      return (
        // <tr key={post.date}>
        <tr key={post.date}>
          <th className="table-head" scope="row">{num += 1}</th>
          <td>{post.name}</td>
          <td>{post.comment}</td>
          {/* <td><button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></td> */}
        </tr>
      );
    });
  }

  render() {
    return (
      <footer className="footer-contact">
        <div className="jumbotron footer-bg">
          <div className="container">
            <div className="footer-content-wrapper row">
              <div className="col">
                <h1 className="contact-title">Contact</h1>
                <div className="media">
                  <div className="media-left">
                    <img className="mr-3 profile-img" alt="프로필 이미지" src="/favicon.ico" />
                  </div>
                  <div className="media-body">
                    <h5 className="mt-0 media-heading" >
                    안녕하세요! 프론트엔드 개발자 고세민입니다.
                    </h5>
                    <dl className="row">
                      <dt className="col-sm-2">Skills </dt>
                      <dd className="col-sm-10 content-text">
                        <code>HTML5</code> <code>CSS3</code> <code>Sass/Scss</code> <code>JavaScript</code> <code>Vue.js</code> <code>React</code> <code>jQuery</code> <code>photoshop</code> <code>illustrator</code> <code>...</code> 
                      </dd>

                      <dt className="col-sm-2">Email </dt>
                      <dd className="col-sm-10 content-text">
                        <p><a className="contact-link" href="mailto:gom0367@gmail.com">gom0367@gmail.com</a></p>
                      </dd>

                      <dt className="col-sm-2">Github </dt>
                      <dd className="col-sm-10 content-text">
                        <p><a className="contact-link" href="https://github.com/degose">https://github.com/degose</a></p>
                      </dd>

                      <dt className="col-sm-2">Blog </dt>
                      <dd className="col-sm-10 content-text">
                        <p><a className="contact-link" href="https://gosecode.wordpress.com">https://gosecode.wordpress.com</a></p>
                      </dd>
                    </dl>
                  </div>
                </div>

                <h3 className="comment-title">Comment를 남겨주세요.</h3>
                <div className="row">
                  <div className="col">
                    <table className="table table-hover table-light">
                      <thead>
                        <tr>
                          <th className="table-head" scope="col">No</th>
                          <th className="table-head" scope="col">Name</th>
                          <th className="table-head" scope="col">Comment</th>
                          {/* <th className="table-head" scope="col"></th> */}
                        </tr>
                      </thead>
                      <tbody className="content-text">
                        {this.renderPosts()}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <form className="" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="input-group">
                        <input type="text" id="input_name" className="form-control" placeholder="Name" onChange={this.handleNameChange} maxLength="20" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="input-group">
                        <input type="text" id="input_comment" className="form-control" placeholder="Comment" aria-label="Comment" onChange={this.handleCommentChange} maxLength="200" />
                        <span className="input-group-btn">
                          <button className="btn btn-secondary btn-comment" type="submit" value="Submit">Submit</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

     
    )
  }
}

export default FooterContact;