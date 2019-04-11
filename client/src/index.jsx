import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import AppNavbar from './components/AppNavbar.jsx';
import MovieNavbar from './components/MovieNavbar.jsx';

ReactDOM.render(<App/>, document.getElementById('main-info'));
ReactDOM.render(<AppNavbar/>, document.getElementById('app-nav'));
// ReactDOM.render(<MovieNavbar/>, document.getElementById('movie-nav'));