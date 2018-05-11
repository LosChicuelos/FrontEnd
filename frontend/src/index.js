import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './Reducers/UserReducer.js';
import './style/index.css';
import App from './components/App';
import firebase from 'firebase'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_xB3I1mHkXII_ipo6z_Z0VxG64lqOopU",
    authDomain: "loschicuelos-aac3d.firebaseapp.com",
    databaseURL: "https://loschicuelos-aac3d.firebaseio.com",
    projectId: "loschicuelos-aac3d",
    storageBucket: "loschicuelos-aac3d.appspot.com",
    messagingSenderId: "747318199586"
  };
  firebase.initializeApp(config);


const allReducers = combineReducers({
    user: userReducer
})

const store = createStore(
    allReducers,{
        user: {email:'',
                id: -1
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

