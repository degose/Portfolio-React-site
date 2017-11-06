import React, { Component } from 'react';
import axios from 'axios';

class FooterContact extends Component {
  constructor(props) {
    super(props);

    this.state = {name: '', comment: ''};
    this.state = {
      posts: [],
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
      let item = Object.values(response.data);
      this.setState({posts: item})
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
        <tr key={post.date}>
          <th scope="row">{num += 1}</th>
          <td>{post.name}</td>
          <td>{post.comment}</td>
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
                {/* <h2>Comment</h2> */}
                <div className="media">
                  <div className="media-left">
                    <img className="mr-3 profile-img" alt="프로필 이미지" src="/favicon.ico" />
                  </div>
                  <div className="media-body">
                    <h5 className="mt-0 media-heading" >
                      안녕하세요! 고세민입니다.
                    </h5>
                    <p>안녕하세요!</p>
                    <div className="btn-group" role="group" aria-label="button group">
                      <form action="https://github.com/degose">
                        <button type="submit" className="btn btn-info-link btn-outline-dark btn-sm">
                          <span className="fa fa-github" aria-hidden="true"></span>
                          Github
                        </button>
                      </form>
                      <form action="https://mood-vuex.firebaseapp.com/">
                        <button type="submit" className="btn btn-info-link btn-outline-dark btn-sm">
                          <span className="fa fa-globe" aria-hidden="true"></span>
                          Web Site
                        </button>
                      </form>
                      <form action="https://docs.google.com/spreadsheets/d/1i7tOWOv7eNiqQlEGzf7wO5ybKPk8lishXqrKqkRDrzU/edit?usp=sharing">
                        <button type="submit" className="btn btn-info-link btn-outline-dark btn-sm">
                          <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                          Daily Scrum
                        </button>
                      </form>
                      <form action="https://youtu.be/k8K98UBskyA">
                        <button type="submit" className="btn btn-info-link btn-outline-dark btn-sm">
                          <span className="fa fa-youtube-play" aria-hidden="true"></span>
                          Youtube
                        </button>
                      </form>

              </div>
                    <form action="https://github.com/degose">
                      <button type="submit" className="btn btn-outline-dark btn-sm">
                        <span className="fa fa-github" aria-hidden="true"></span>
                        Github
                      </button>
                    </form>
                  </div>
                </div>

                <h3>Comment를 남겨주세요.</h3>
                <table className="table table-hover table-light">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderPosts()}
                  </tbody>
                </table>
                
                <form className="" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="input-group">
                        {/* <label className="sr-only" for="exampleInputEmail3">Email address</label> */}
                        <input type="text" id="input_name" className="form-control" placeholder="Name" onChange={this.handleNameChange} maxLength="20" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="input-group">
                        <input type="text" id="input_comment" className="form-control" placeholder="Comment" aria-label="Comment" onChange={this.handleCommentChange} maxLength="70" />
                        <span className="input-group-btn">
                          <button className="btn btn-secondary" type="submit" value="Submit">올리기</button>
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