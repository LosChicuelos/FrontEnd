import {LOGIN_USER} from '../Actions/UserActions';

export default function userReducer(state=[],{type , payload}){
    switch(type){
        case LOGIN_USER:
            return payload.user;
        default:
            return state;
    }
}