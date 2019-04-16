import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import ReposTable from 'components/ReposTable';
import { loadRepos } from './action';

class Home extends Component {
  componentDidMount() {
    const params = {
      page: 1,
      perPage: 10
    }
    this.props.loadRepos(params);
  }
  render() {
    const { repos, nextPageRepos } = this.props;
    return (
      <Layout>
        <h1>Repos</h1>
        <ReposTable data={repos} nextPageRepos={nextPageRepos} pageCount={7} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.homeReducer.repos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadRepos: (params) => {
      dispatch(loadRepos(params));
    },
    nextPageRepos: (page) => {
      const params = {
        page: page,
        perPage: 10
      };
      dispatch(loadRepos(params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
