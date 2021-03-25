import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import LoginPage from '../components/LoginPage';
import MainPage from '../components/MainPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
    <div className='hello'>
        <Switch>
            <PublicRoute path='/' component={LoginPage} exact={true} />
            <PrivateRoute path='/dashboard' component={MainPage} exact={true} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;
