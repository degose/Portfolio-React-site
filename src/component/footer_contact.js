import React, { Component } from 'react';
import axios from 'axios';

class FooterContact extends Component {
  constructor(props) {
    super(props);

    this.state = {name: '', comment: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleCommentChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    console.log('내가 적은 말은', this.state.name);
    event.preventDefault();
    axios.post('https://portfolio-react-site.firebaseio.com', 
    {
      name: '되냐', 
      comment: '안되냐'
      // name: this.state.name, 
      // comment: this.state.comment
    })
    .then(response => {
      console.log('response', response);
    })
    .catch(error => {
      console.log(error);
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
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                    </tr>
                  </tbody>
                </table>
                
                <form className="" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="input-group">
                        {/* <label className="sr-only" for="exampleInputEmail3">Email address</label> */}
                        <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Comment" aria-label="Comment" value={this.state.comment} onChange={this.handleCommentChange}></input>
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