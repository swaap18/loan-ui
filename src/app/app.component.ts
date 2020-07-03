import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loanmgmt-ui';
 

  constructor(private authService:AuthenticationService){

  }
  logout(){
    console.log(' ssfs');
    sessionStorage.removeItem('username');
    //this.authService.setUserName('');
  }
  
}
