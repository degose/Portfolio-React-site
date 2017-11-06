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
      <footer className="header-info">
        <div className="jumbotron header-bg">
          <div className="container">
            <div className="header-content-wrapper row">
              <div className="col">
                <h1 className="contact-title">Contact</h1>
                {/* <h2>Comment</h2> */}
                <table className="table table-hover table-light">
                  <caption>List of users</caption>
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
                        <input type="text" id="input_name" className="form-control" placeholder="Name" onChange={this.handleNameChange} />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="input-group">
                        <input type="text" id="input_comment" className="form-control" placeholder="Comment" aria-label="Comment" onChange={this.handleCommentChange}></input>
                        <span className="input-group-btn">
                          <button className="btn btn-secondary" type="submit" value="Submit">올리기</button>
                        </span>
                      </div>
                    </div>

                  </div>

                </form>

                <h2>contact</h2>
                <form action="https://github.com/degose">
                  <button type="submit" className="btn btn-outline-dark">
                    <span className="fa fa-github" aria-hidden="true"></span>
                    Github
                  </button>
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