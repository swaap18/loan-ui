import {Injectable} from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable()
export class AuthenticationService{

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

    public setUserName(id:string){
       sessionStorage.setItem('username',id);
       this.loggedIn.next(true);
    }
    public getUserName(){
        return sessionStorage.getItem('username');
    }
    public logout(){       
        sessionStorage.removeItem('username');
        this.loggedIn.next(false);
      }
}