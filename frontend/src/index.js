import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
