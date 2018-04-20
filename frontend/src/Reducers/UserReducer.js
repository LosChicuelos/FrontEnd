export default function userReducer(state=[],action){
    switch(action.type){
        case 'loginUser':
            return action.payload;
    }
    return state;
}