import React, { Component } from 'react';

class FooterContact extends Component {
  render() {
    return (
      <footer className="header-info">
        <div className="jumbotron header-bg">
          <div className="container">
            <div className="header-content-wrapper row">
              <div className="col">
                <h1>Contact</h1>
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
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Comment" aria-label="Comment"></input>
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Comment Submit</button>
                  </span>
                </div>
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