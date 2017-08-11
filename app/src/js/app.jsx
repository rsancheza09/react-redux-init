import React from 'react';
import { render } from 'react-dom';

import Routes from './router';
import Header from './components/Header';

import '../style/index.scss';
import '../images/favicon.ico';

const App = () => <div><Header /><Routes /></div>;

render(<App />, document.getElementById('app'));
