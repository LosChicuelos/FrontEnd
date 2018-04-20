import {LOGIN_USER} from '../Actions/UserActions';

export default function userReducer(state=[],action){
    switch(action.type){
        case LOGIN_USER:
            return action.payload.user;
        default:
            return state;
    }
}