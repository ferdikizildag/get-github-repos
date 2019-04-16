import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class ReposTable extends Component {
  render() {
    const { data, nextPageRepos } = this.props;
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Clone Url</th>
              <th scope="col">Watchers</th>
              <th scope="col">*</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, key) => (
                <tr key={key}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.clone_url}</td>
                  <td>{item.watchers}</td>
                  <td><NavLink to={`/repos/${item.name}`}>Detail</NavLink></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="custom-pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item" onClick={() => nextPageRepos(1)}><span className="page-link">1</span></li>
              <li className="page-item" onClick={() => nextPageRepos(2)}><span className="page-link">2</span></li>
              <li className="page-item" onClick={() => nextPageRepos(3)}><span className="page-link">3</span></li>
              <li className="page-item" onClick={() => nextPageRepos(4)}><span className="page-link">4</span></li>
              <li className="page-item" onClick={() => nextPageRepos(5)}><span className="page-link">5</span></li>
              <li className="page-item" onClick={() => nextPageRepos(6)}><span className="page-link">6</span></li>
              <li className="page-item" onClick={() => nextPageRepos(7)}><span className="page-link">7</span></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}