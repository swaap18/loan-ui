import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService{

    public setUserName(id:string){
        sessionStorage.setItem('username',id);
       // sessionStorage.setItem("password",password);
    }
    public getUserName(){
        return sessionStorage.getItem('username');
    }

}