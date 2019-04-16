import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import { loadPullRequests } from './action';
import PullRequestsTable from 'components/PullRequestsTable';
import { NavLink } from 'react-router-dom';

class PullRequest extends Component {
    componentDidMount() {
        const params = {
            page: 1,
            perPage: 10,
            repoName: this.props.match.params.name,
        }
        this.props.loadPullRequests(params);
    }
    render() {
        const { pullRequests, match: { params: { name } }, nextPagePullRequests } = this.props;
        return (
            <Layout>
                <h1>Pull Requests</h1>
                <NavLink to={`/repos/${name}`}>Geri</NavLink>
                <PullRequestsTable data={pullRequests} nextPagePullRequests={nextPagePullRequests} />
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pullRequests: state.repoPullRequestReducer.pullRequests
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadPullRequests: (params) => {
            dispatch(loadPullRequests(params));
        },
        nextPagePullRequests: (page) => {
            const params = {
                page: page,
                perPage: 10,
                repoName: props.match.params.name,
            };
            dispatch(loadPullRequests(params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PullRequest);
