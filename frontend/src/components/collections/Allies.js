/*global fetch*/
/*global Headers*/
/*global Request*/
import {observable, action} from 'mobx';

class Users{
    @observable all = [];
    @observable isLoading = false;
    
    @action async fetchall(){
        this.isLoading=false;
        const response = await fetch('http://backend-bsdiaza.c9users.io/users');
        const status = await response.status;
        if(status === 200){
            this.all = await response.json();
        }
    }
    
    @action async getter(data){
        const headers = new Headers();
        headers.append('Content-Type', 'application/jason');
        const request = new Request('http://backend-bsdiaza.c9users.io');
        const option= {
            method: 'POST',
            headers,
            body: JSON.stringfy(data)
        }
            
        }
       
    

    
}
export default new Users();