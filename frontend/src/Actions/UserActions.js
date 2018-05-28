export  const LOGIN_USER = 'users:loginUser';
export function loginUser(loggedUser){
    return{
        type: LOGIN_USER,
        payload: { 
            user: loggedUser
        }
    }
}
export function logoutUser(){
    return{
        type: LOGIN_USER,
        payload: { 
            user: {
                email: '',
                id: -1
            }
        }
    }
}