import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router';
import { logger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.css';
import 'utils/styles/index.scss';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import sagas from './sagas';
import Home from 'containers/Home';
import RepoDetail from 'containers/Repo/Detail';
import RepoPullRequest from 'containers/Repo/PullRequest';
import RepoIssue from 'containers/Repo/Issue';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)),
);
sagaMiddleware.run(sagas);
render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repos/:name" component={RepoDetail} />
        <Route path="/repo/pull-requests/:name" component={RepoPullRequest} />
        <Route path="/repo/issues/:name" component={RepoIssue} />
        <Route path="/*" component={() => 'NOT FOUND'} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();