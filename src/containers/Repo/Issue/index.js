import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from 'components/Layout';
import { loadIssues } from './action';
import IssuesTable from 'components/IssuesTable';
import { NavLink } from 'react-router-dom';

class Issue extends Component {
    componentDidMount() {
        const params = {
            page: 1,
            perPage: 10,
            repoName: this.props.match.params.name,
        }
        this.props.loadIssues(params);
    }
    render() {
        const { issues, match: { params: { name } }, nextPageIssues } = this.props;
        return (
            <Layout>
                <h1>Issues</h1>
                <NavLink to={`/repos/${name}`}>Geri</NavLink>
                <IssuesTable data={issues} nextPageIssues={nextPageIssues} />
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.repoIssueReducer.issues
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadIssues: (params) => {
            dispatch(loadIssues(params))
        },
        nextPageIssues: (page) => {
            const params = {
                page: page,
                perPage: 10,
                repoName: props.match.params.name,
            };
            dispatch(loadIssues(params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
