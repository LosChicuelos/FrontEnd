import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import './style/index.css';
import App from './components/App';

function userReducer(state=[],action){
    switch(action){
        case 'loginUser':
            return action.payload;
            break;
    }
    return state;
}

const allReducers = combineReducers({
    user: userReducer
})

const store = createStore(
    allReducers,{
        user: [{ email: '',
                token: ''
        }]
    }, window.devToolsExtension && 
        window.devToolsExtension()
);
const LoginUserAction = {
    type: 'loginUser',
    payload:{
        email: 'bsdiaza@unal.edu.co',
        token: 'token'
    }
}
console.log(store.getState());
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

