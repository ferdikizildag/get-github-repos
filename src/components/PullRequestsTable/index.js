import React, { Component } from 'react';
import Style from './style.module.scss';

export default class PullRequestsTable extends Component {
  render() {
    const { data, nextPagePullRequests } = this.props;
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Url</th>
              <th scope="col">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, key) => (
                <tr key={key}>
                  <th scope="row">{item.id}</th>
                  <td>{item.url}</td>
                  {item.user && <td><img className={Style.avatar} alt="" src={item.user.avatar_url} /></td>}
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="custom-pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item" onClick={() => nextPagePullRequests(1)}><span className="page-link">1</span></li>
              <li className="page-item" onClick={() => nextPagePullRequests(2)}><span className="page-link">2</span></li>
              <li className="page-item" onClick={() => nextPagePullRequests(3)}><span className="page-link">3</span></li>
              <li className="page-item" onClick={() => nextPagePullRequests(4)}><span className="page-link">4</span></li>
              <li className="page-item" onClick={() => nextPagePullRequests(5)}><span className="page-link">5</span></li>
              <li className="page-item" onClick={() => nextPagePullRequests(6)}><span className="page-link">6</span></li>
              <li className="page-item" onClick={() => nextPagePullRequests(7)}><span className="page-link">7</span></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}