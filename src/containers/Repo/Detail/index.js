import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import { loadRepo } from './action';
import { NavLink } from 'react-router-dom';

class RepoDetail extends Component {
    componentDidMount() {
        const repoName = this.props.match.params.name;
        this.props.loadRepo(repoName);
    }
    render() {
        const { currentRepo } = this.props;
        return (
            <Layout>
                <h1>Repo Detail</h1>
                <h4>Repo Name: {currentRepo.name}</h4>
                <h4>CreatedAt: {currentRepo.created_at}</h4>
                <h4>Forks Count: {currentRepo.forks_count}</h4>
                <h4>Open Issues Count: {currentRepo.open_issues_count}</h4>
                <h4>Watchers Count: {currentRepo.watchers_count}</h4>
                <li><NavLink to={`/repo/pull-requests/${currentRepo.name}`}>Pull requests</NavLink></li>
                <li><NavLink to={`/repo/issues/${currentRepo.name}`}>Issues</NavLink></li>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentRepo: state.repoDetailReducer.currentRepo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRepo: (repoName) => {
            dispatch(loadRepo(repoName))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail);
