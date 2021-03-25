import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import jwt from 'jsonwebtoken';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
            ReactDOM.render(jsx, document.getElementById('root'));
            hasRendered = true;
    }
};
ReactDOM.render( <LoadingPage />, document.getElementById('root'));
const handleUser = () => {
    if (localStorage.getItem('token')) {
        console.log('gotToken')
        const decoded = jwt.verify(localStorage.getItem('token'), 'secret');
        store.dispatch(login(decoded.email));
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
}
handleUser();
window.onstorage = handleUser;