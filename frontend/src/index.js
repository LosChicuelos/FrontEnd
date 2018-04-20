import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './Reducers/UserReducer.js';
import './style/index.css';
import App from './components/App';


const allReducers = combineReducers({
    user: userReducer
})

const store = createStore(
    allReducers,{
        user: { email: '',
                token: ''
        }
    }, window.devToolsExtension && 
        window.devToolsExtension()
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

